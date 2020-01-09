import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button, HeroWrapper } from "../../shared/components/shared.components";

const Welcome: FC = () => {
    return (
        <HeroWrapper>
            Welcome to todo app!
            <Link to="todos">
                <Button mt="20px">Get started</Button>
            </Link>
        </HeroWrapper>
    );
};

export default Welcome;
