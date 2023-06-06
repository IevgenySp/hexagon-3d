export type IHexagonProps = {
    width?: number;
    height?: number;
    rotateZ?: number;
    rotateX?: number;
    growTop?: boolean;
    showShadow?: boolean;
    shadowColor?: string;
    topBottomColor?: string;
    sidesColor?: string;
    opacity?: number;
    showTransition?: boolean;
};
export type IHexagonChildrensProps = {
    topChildren?: any;
    bottomChildren?: any;
    side1Children?: any;
    side2Children?: any;
    side3Children?: any;
    side4Children?: any;
    side5Children?: any;
    side6Children?: any;
};
declare const hexagon3D: ({ width, height, rotateZ, rotateX, showShadow, shadowColor, growTop, topBottomColor, sidesColor, opacity, showTransition, }: IHexagonProps) => {
    container: {
        style: {
            position: string;
            transformStyle: string;
            transform: string;
            width: string;
        };
        top: {
            id: string;
            style: {
                zIndex: number;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                clipPath: string;
                background: string;
                overflow: string;
            };
        };
        side1: {
            id: string;
            style: {
                left: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side2: {
            id: string;
            style: {
                left: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side3: {
            id: string;
            style: {
                left: string;
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side4: {
            id: string;
            style: {
                left: string;
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side5: {
            id: string;
            style: {
                left: string;
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side6: {
            id: string;
            style: {
                left: string;
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        bottom: {
            id: string;
            style: {
                marginTop: string;
                zIndex: number;
                transform: string;
                transition: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                clipPath: string;
                background: string;
                overflow: string;
            };
        };
    };
} | {
    container: {
        style: {
            position: string;
            transformStyle: string;
            transform: string;
            width: string;
        };
        top: {
            id: string;
            style: {
                zIndex: number;
                transform: string;
                transition: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                clipPath: string;
                background: string;
                overflow: string;
            };
        };
        side1: {
            id: string;
            style: {
                left: string;
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side2: {
            id: string;
            style: {
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side3: {
            id: string;
            style: {
                left: string;
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side4: {
            id: string;
            style: {
                left: string;
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side5: {
            id: string;
            style: {
                left: string;
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        side6: {
            id: string;
            style: {
                left: string;
                top: string;
                transformOrigin: string;
                transform: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                opacity: number;
                boxSizing: string;
                background: string;
                boxShadow: string;
                transition: string;
                overflow: string;
            };
        };
        bottom: {
            id: string;
            style: {
                marginTop: string;
                zIndex: number;
                display: string;
                justifyContent: string;
                alignItems: string;
                position: string;
                width: string;
                height: string;
                cursor: string;
                clipPath: string;
                background: string;
                overflow: string;
            };
        };
    };
};
export default hexagon3D;
