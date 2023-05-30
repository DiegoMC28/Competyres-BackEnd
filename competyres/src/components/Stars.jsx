import imgStarWhite from "../resources/star-icon-white.webp";
import imgStarGold from "../resources/star-icon-gold.webp";
import CSS from "./Stars.module.css";

const stars = [
    { id: "STAR_1", value: 1 },
    { id: "STAR_2", value: 2 },
    { id: "STAR_3", value: 3 },
    { id: "STAR_4", value: 4 },
    { id: "STAR_5", value: 5 },
];

function Stars(props) {
    const { onChange = () => {}, value } = props;

    const onStarClickHandler = (value) => {
        onChange(value);
    };

    return (
        <div className={CSS.image}>
            {stars.map((star) => {
                const src = star.value <= value ? imgStarGold : imgStarWhite;
                return (
                    <img
                        onClick={() => onStarClickHandler(star.value)}
                        width={30}
                        height={30}
                        key={star.id}
                        src={src}
                        alt="Estrella"
                    ></img>
                );
            })}
        </div>
    );
}

export default Stars;
