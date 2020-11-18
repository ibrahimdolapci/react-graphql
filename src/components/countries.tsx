import React, {useState} from "react";
import {Table, Button, Modal, Space} from 'antd';
import {ICountry, ILanguage} from "../interfaces";
import {EyeOutlined} from "@ant-design/icons";
import {useQuery} from "@apollo/client";
import {GET_COUNTRIES} from "../graphql/queries";
import {useParams} from "react-router-dom";
import {Country} from "./country";
import {Language} from "./language";

export function Countries() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Capital',
            dataIndex: 'capital',
            key: 'capital',
        }, {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
        }, {
            title: 'Languages',
            dataIndex: 'languages',
            key: 'languages',
            render: (languages: ILanguage[]) => (
                <Space>
                    {languages.map(language => <Language key={language.code} {...language}/>)}
                </Space>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, country: ICountry) => (
                <Button icon={<EyeOutlined/>} onClick={() => {
                    setCountryCode(country.code);
                    setVisibility(true);
                }}>
                    Preview
                </Button>
            ),
        },
    ];

    const {continent} = useParams<{ continent: string }>();
    const {loading, data = {countries: []}} = useQuery<{ countries: ICountry[] }>(GET_COUNTRIES, {variables: {continent}});
    const [countryCode, setCountryCode] = useState("");
    const [visibility, setVisibility] = useState(false);

    return (<>
        <Table columns={columns} dataSource={data.countries} loading={loading}/>
        <Modal
            title="Country Info"
            visible={visibility}
            footer={null}
            onCancel={() => setVisibility(false)}
        >
            <Country code={countryCode}/>
        </Modal>
    </>);
}
