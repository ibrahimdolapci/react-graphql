import React from "react";
import {Descriptions, Empty, List, Skeleton, Tag, Typography} from "antd";
import {ICountry} from "../interfaces";
import {useQuery} from "@apollo/client";
import {GET_COUNTRY} from "../graphql/queries";
import styled from "styled-components";
import {Language} from "./language";

const FullWidthTag = styled(Tag)`
    width: 100%;
    text-align: center;
    
    span {
        width: 100%;
    }
`;

export function Country({code = ""}) {
    const {loading, data} = useQuery<{ country: ICountry }>(GET_COUNTRY, {variables: {code}});

    if (loading) return <Skeleton active/>

    if (!(data && data.country)) return <Empty/>;

    const {country} = data;

    return (
        <Descriptions title={`${country.name} Details`} column={1} bordered>
            <Descriptions.Item label="Name">{country?.name}</Descriptions.Item>
            <Descriptions.Item label="Capital">{country?.capital}</Descriptions.Item>
            <Descriptions.Item label="Currency">{country?.currency}</Descriptions.Item>
            <Descriptions.Item label="Phone">{country?.phone}</Descriptions.Item>
            <Descriptions.Item label="Languages">
                <List
                    grid={{gutter: 8, column: 2}}
                    dataSource={country?.languages}
                    renderItem={language => (
                        <List.Item>
                            <Language {...language}/>
                        </List.Item>
                    )}
                />
            </Descriptions.Item>
            <Descriptions.Item label="States">
                <List
                    grid={{gutter: 8, column: 2}}
                    dataSource={country?.states}
                    renderItem={state => (
                        <List.Item>
                            <FullWidthTag>
                                <Typography.Text ellipsis={true}>{state.name}</Typography.Text>
                            </FullWidthTag>
                        </List.Item>
                    )}
                />
            </Descriptions.Item>
        </Descriptions>
    )
}
