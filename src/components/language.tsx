import {Tag} from "antd";
import React from "react";
import {ILanguage} from "../interfaces";
import styled from "styled-components";

const FullWidthTag = styled(Tag)`
    width: 100%;
    text-align: center;
    min-width: 0;
`;

export function Language({name, code}: ILanguage) {
    const colors = ['geekblue', 'green', 'volcano', 'magenta', 'purple'];
    const index = name.length % colors.length;

    return (
        <div>
            <FullWidthTag color={colors[index]} key={code}>
                {name}
            </FullWidthTag>
        </div>
    );
}
