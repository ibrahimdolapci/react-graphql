import {Layout, Menu} from "antd";
import React from "react";
import {useQuery} from "@apollo/client";
import {GET_CONTINENTS} from "../../graphql/queries";
import {IContinent} from "../../interfaces";
import {Link} from "react-router-dom";

export function Header() {
    const {data = {continents: []}} = useQuery<{ continents: IContinent[] }>(GET_CONTINENTS);

    const {continents} = data;

    return (
        <Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {
                    continents.map(continent => (
                        <Menu.Item key={continent.code}>
                            <Link to={'/continent/' + continent.code}>
                                {continent.name}
                            </Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Layout.Header>
    )
}
