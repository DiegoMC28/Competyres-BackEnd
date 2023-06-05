import CSS from "./Profile.module.css";
import imagenLogout from "../resources/exit-icon.webp";

function Profile(props) {
    return (
        <div className={CSS.body}>
            <div>
                <h1>
                    {props.Name} {props.LastName}
                </h1>
                <hr />

                <div>
                    <h4>{props.Age} años</h4> <h4>{props.Email}</h4>
                </div>
            </div>
            <div>
                <img
                    className={CSS.logoutButton}
                    onClick={props.logoutHandler}
                    src={imagenLogout}
                ></img>
            </div>
        </div>
    );
}

export default Profile;
