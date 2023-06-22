import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const cardList = [
  {
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Card title",
    description: "This is the description",
  },
  {
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Card title 1",
    description: "This is the description",
  },
  {
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Card title 2",
    description: "This is the description",
  },
  {
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Card title 3",
    description: "This is the description",
  },
];

function Bt01Card() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {cardList.map((card) => (
        <Card
          style={{
            width: 300,
          }}
          cover={<img alt="example" src={card.src} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title={card.title}
            description={card.description}
          />
        </Card>
      ))}
    </div>
  );
}

export default Bt01Card;
