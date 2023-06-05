export type IHexagonProps = {
    width?: number,
    height?: number,
    rotateZ?: number,
    rotateX?: number,
    growTop?: boolean,
    showShadow?: boolean,
    shadowColor?: string,
    topBottomColor?: string,
    sidesColor?: string,
    opacity?: number,
    showTransition?: boolean,
};

export type IHexagonChildrensProps = {
    topChildren?: HTMLElement | Element,
    bottomChildren?: HTMLElement | Element,
    side1Children?: HTMLElement | Element,
    side2Children?: HTMLElement | Element,
    side3Children?: HTMLElement | Element,
    side4Children?: HTMLElement | Element,
    side5Children?: HTMLElement | Element,
    side6Children?: HTMLElement | Element,
};

const topBottomColorInit = 'linear-gradient( to top right,rgba(156,204,101 ,1) 0%, rgba(38,198,218 ,1) 50%)';
const sidesColorInit = 'linear-gradient( to top right, rgba(63,81,181,1) 0%, rgba(3,155,229 ,1) 40%)';
const shadowColorInit = '1px 1px 30px rgb(2 119 189)';

const sidesColorAlternativeInit = 'linear-gradient(to top, rgba(255,81,50,1) 0%,rgba(255,246,0,1) 100%)';
const sidesShadowAlternativeInit = '0px 10px 40px 5px #c600ff';

const hexagon3D = ({
                       width = 70,
                       height = 50,
                       rotateZ = 30,
                       rotateX = 50,
                       showShadow = false,
                       shadowColor = shadowColorInit,
                       growTop = false,
                       topBottomColor = topBottomColorInit,
                       sidesColor = sidesColorInit,
                       opacity = 0.8,
                       showTransition = false,
}: IHexagonProps) => {
    const height2D = width * 1.1547;
    const sideLength = height2D / 2;
    const smallHeight = Math.sqrt(height2D**2 - sideLength**2);

    const hexagonStyleCommon = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width:  width + 'px',
        height: height2D + 'px',
        cursor: 'pointer',
        clipPath: 'polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)',
        background: topBottomColor,
        overflow: 'hidden',
    };
    const sideStyleCommon = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width:  sideLength + 'px',
        height: height + 'px',
        cursor: 'pointer',
        opacity: opacity,
        boxSizing: 'border-box',
        background: sidesColor,
        boxShadow: showShadow ? shadowColor : 'unset',
        transition: showTransition ? 'height 0.5s ease-out' : 'unset',
        overflow: 'hidden',
    };

    return !growTop ? {
        container: {
            style: {
                position: 'relative',
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
                width: 'fit-content',
            },
            top: {
                id: 'top',
                style: {
                    ...hexagonStyleCommon,
                    zIndex: 2
                }
            },
            side1: {
                id: 'side1',
                style: {
                    ...sideStyleCommon,
                    left: smallHeight / 2 + 'px',
                    transformOrigin: 'top left',
                    transform: 'rotateZ(-30deg) rotateX(-90deg)',
                }
            },
            side2: {
                id: 'side2',
                style: {
                    ...sideStyleCommon,
                    left: (smallHeight / 2 - sideLength) + 'px',
                    transformOrigin: 'top right',
                    transform: 'rotateZ(30deg) rotateX(-90deg)',
                }
            },
            side3: {
                id: 'side3',
                style: {
                    ...sideStyleCommon,
                    left: -sideLength + 'px',
                    top: (height2D - sideLength) / 2 + sideLength + 'px',
                    transformOrigin: 'top right',
                    transform: 'rotateZ(90deg) rotateX(-90deg)'
                }
            },
            side4: {
                id: 'side4',
                style: {
                    ...sideStyleCommon,
                    left: -sideLength + 'px',
                    top: (height2D - sideLength) / 2 + 'px',
                    transformOrigin: 'top right',
                    transform: 'rotateZ(150deg) rotateX(-90deg)'
                }
            },
            side5: {
                id: 'side5',
                style: {
                    ...sideStyleCommon,
                    left: smallHeight + 'px',
                    top: (height2D - sideLength) / 2 + 'px',
                    transformOrigin: 'top left',
                    transform: 'rotateZ(-150deg) rotateX(-90deg)'
                }
            },
            side6: {
                id: 'side6',
                style: {
                    ...sideStyleCommon,
                    left: smallHeight + 'px',
                    top: (height2D - sideLength) / 2 + sideLength + 'px',
                    transformOrigin: 'top left',
                    transform: 'rotateZ(-90deg) rotateX(-90deg)'
                }
            },
            bottom: {
                id: 'bottom',
                style: {
                    ...hexagonStyleCommon,
                    marginTop: -height2D + 'px',
                    zIndex: 1,
                    transform: `translateZ(${-height}px)`,
                    transition: 'transform 0.5s ease-out',
                }
            }
        }
    } : {
        container: {
            style: {
                position: 'relative',
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
                width: 'fit-content',
            },
            top: {
                id: 'top',
                style: {
                    ...hexagonStyleCommon,
                    //marginBottom: height2D + 'px',
                    zIndex: 2,
                    transform: `translateZ(${height}px)`,
                    transition: 'transform 0.5s ease-out',
                }
            },
            side1: {
                id: 'side1',
                style: {
                    ...sideStyleCommon,
                    left: smallHeight / 2 + 'px',
                    top: (height2D - smallHeight) + 'px',
                    transformOrigin: 'bottom left',
                    transform: `translateY(${-height + smallHeight}px) rotateZ(-30deg) rotateX(270deg)`,
                }
            },
            side2: {
                id: 'side2',
                style: {
                    ...sideStyleCommon,
                    top: (height2D - sideLength) / 2 + sideLength - smallHeight + 'px',
                    transformOrigin: 'bottom left',
                    transform: `translateY(${-height + smallHeight}px) rotateZ(30deg) rotateX(-90deg)`,
                }
            },
            side3: {
                id: 'side3',
                style: {
                    ...sideStyleCommon,
                    left: -sideLength + 'px',
                    top: (height2D - sideLength) / 2 + sideLength - smallHeight + 'px',
                    transformOrigin: 'bottom right',
                    transform: ` translateY(${-height + smallHeight}px) rotateZ(90deg) rotateX(-90deg)`
                }
            },
            side4: {
                id: 'side4',
                style: {
                    ...sideStyleCommon,
                    left: -sideLength + 'px',
                    top: (height2D - sideLength) / 2 - smallHeight + 'px',
                    transformOrigin: 'bottom right',
                    transform: `translateY(${-height + smallHeight}px) rotateZ(150deg) rotateX(-90deg)`
                }
            },
            side5: {
                id: 'side5',
                style: {
                    ...sideStyleCommon,
                    left: smallHeight + 'px',
                    top: (height2D - sideLength) / 2 - smallHeight + 'px',
                    transformOrigin: 'bottom left',
                    transform: `translateY(${-height + smallHeight}px) rotateZ(-150deg) rotateX(-90deg)`
                }
            },
            side6: {
                id: 'side6',
                style: {
                    ...sideStyleCommon,
                    left: smallHeight + 'px',
                    top: (height2D - sideLength) / 2 - smallHeight + sideLength + 'px',
                    transformOrigin: 'bottom left',
                    transform: `translateY(${-height + smallHeight}px) rotateZ(-90deg) rotateX(-90deg)`
                }
            },
            bottom: {
                id: 'bottom',
                style: {
                    ...hexagonStyleCommon,
                    marginTop: - height2D + 'px',
                    zIndex: 1,
                }
            }
        }
    }

};

export default hexagon3D;
