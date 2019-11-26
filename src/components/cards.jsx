import React from 'react';
import beatbooktitle from "../images/beatbooktitle.png";
import 'antd/dist/antd.css'
import { Card, Icon, Avatar, Row, Col } from 'antd';
const { Meta } = Card;

// const projects = [] map through projects array with card
// use the "loading" version of the card for skeleton. see Ant website -> cards.
const cardArr = [{img: beatbooktitle, title: "The Beatbook", description: "Full-Stack Engineer"}, 
                  {img: beatbooktitle, title: "test 2", description: "test 22"}]
function Cards () {
  return (
    <div height="100%">
      <Row type="flex" justify="space-around" align="middle">
      {cardArr.map((cardInfo, i) => {
        return (
        <Col span={8}>
          <Card
            hoverable="true"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={cardInfo.img}
              />
            }
            actions={[
              <Icon type="setting" key="setting" />,
              // <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
            onClick={()=>console.log('hey')}
          >
            <Meta
              // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={cardInfo.title}
              description={cardInfo.description}
            />
          </Card>
        </Col>
        )
      })
      }
        {/* <Col span={8}>
        <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col> */}
      </Row>
    </div>
  );

}



export default Cards;
