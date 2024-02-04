interface HangmanDrawingProps {
    amountErrorUser: number
}

const Head = (
    <div
        style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            right: "-20px",
            top: "50px",
            borderRadius: "100%",
            backgroundColor: "#000"
        }}
        key={'Head'}
    ></div>
);

const LeftHand = (
    <div
        style={{
            position: "absolute",
            width: "10px",
            height: "75px",
            right: "25px",
            top: "100px",
            backgroundColor: "#000",
            transform: "rotate(45deg)"
        }}
        key={'LeftHand'}
    ></div>
);

const RightHand = (
    <div
        style={{
            position: "absolute",
            width: "10px",
            height: "75px",
            right: "-25px",
            top: "100px",
            backgroundColor: "#000",
            transform: "rotate(-45deg)"
        }}
        key={'RightHand'}
    ></div>
);

const Body = (
    <div
        style={{
            position: "absolute",
            width: "10px",
            height: "125px",
            right: "0",
            top: "100px",
            backgroundColor: "#000"
        }}
        key={'Body'}
    ></div>
);

const LeftFoot = (
    <div
        style={{
            position: "absolute",
            width: "10px",
            height: "75px",
            right: "20px",
            top: "210px",
            backgroundColor: "#000",
            transform: "rotate(35deg)"
        }}
        key={'LeftFoot'}
    ></div>
);

const RightFoot = (
    <div
        style={{
            position: "absolute",
            width: "10px",
            height: "75px",
            right: "-20px",
            top: "210px",
            backgroundColor: "#000",
            transform: "rotate(-35deg)"
        }}
        key={'RightFoot'}
    ></div>
);

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ amountErrorUser}) => {



    const BODY_PARTS = [Head, LeftHand, RightHand, Body, LeftFoot, RightFoot];
    return (
        <div style={{ position: "relative", margin: "auto" }}>
            {
                BODY_PARTS.slice(0, amountErrorUser)
            }
            <div
                style={{
                    position: "absolute",
                    width: "10px",
                    height: "50px",
                    right: "0",
                    top: "0",
                    backgroundColor: "#000"
                }}
            ></div>
            <div
                style={{
                    marginLeft: "120px",
                    width: "200px",
                    height: "10px",
                    backgroundColor: "#000"
                }}
            ></div>
            <div
                style={{
                    marginLeft: "120px",
                    width: "10px",
                    height: "400px",
                    backgroundColor: "#000"
                }}
            ></div>
            <div
                style={{
                    width: "250px",
                    height: "10px",
                    backgroundColor: "#000"
                }}
            ></div>
        </div>
    );
};

export default HangmanDrawing;
