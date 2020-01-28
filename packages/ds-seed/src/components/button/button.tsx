import * as React from "react";

interface MySillyButton {
    onClick: any
}
const MySillyButton = ({ onClick }: MySillyButton) => <button onClick={onClick}>hehe</button>;

export default MySillyButton;
