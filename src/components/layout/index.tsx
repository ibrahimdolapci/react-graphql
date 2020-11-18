import {Header} from "./header";
import {Redirect, Route, Switch} from "react-router-dom";
import {Countries} from "../countries";
import {Layout} from "antd";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import styled from "styled-components";

const {Content, Footer} = Layout;

const FullHeightLayout = styled(Layout)`
    min-height: 100vh;
`;

const PaddedContent = styled(Content)`
    padding: 0 50px;
    margin-top: 64px;
    height: 100%;
`;

const Background = styled.div`
    padding: 24px;
    min-height: 380px;
`;

const CenteredFooter = styled(Footer)`
    text-align: center;
`;

export function AppLayout() {
    return (
        <Router>
            <FullHeightLayout>
                <Header/>
                <PaddedContent>
                    <Background>
                        <Switch>
                            <Route path="/:continent">
                                <Countries/>
                            </Route>
                            <Route path="/">
                                <Redirect to="/AF" />
                            </Route>
                        </Switch>
                    </Background>
                </PaddedContent>
                <CenteredFooter>React + Graphql Example</CenteredFooter>
            </FullHeightLayout>
        </Router>
    )
}
