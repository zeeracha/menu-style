import React from "react";
import styled from "styled-components";

export const RectangleRootRoot1 = ({}) => {
  return (
    <RectangleRootRootRoot>
      <FlexRow>
        <Text1>ตัวเลือกเดิมพัน</Text1>
        <Image1 src={`https://file.rendit.io/n/e7vWHz3cjkpMPNmXB44x.svg`} />
      </FlexRow>
      <FlexRow1>
        {[
          {
            childText: `ขนาดเดิมพัน`,
          },
          {
            childText: `ระดับเดิมพัน`,
          },
          {
            childText: `เส้น`,
          },
          {
            childText: `จำนวนเดิมพัน`,
          },
        ].map((data) => (
          <Text2>{data.childText}</Text2>
        ))}
      </FlexRow1>
      <FlexRow2>
        <BlackFlexRow>
          <Text2>x</Text2>
          <FlexRow3>
            <Text2>x</Text2>
            <Text8>15</Text8>
            <Text2>=</Text2>
          </FlexRow3>
        </BlackFlexRow>
        <FlexColumn>
          <Text2>0.20</Text2>
          <Text11>0.30</Text11>
          <Text2>0.40</Text2>
          <Text2>0.50</Text2>
        </FlexColumn>
        <FlexColumn1>
          <Text14>1</Text14>
          <Text2>2</Text2>
          <Text2>3</Text2>
          <Text2>4</Text2>
        </FlexColumn1>
        <FlexColumn2>
          <Text18>4.50</Text18>
          <Text18>6.00</Text18>
          <Text18>7.50</Text18>
          <Text18>9.00</Text18>
          <Text22>12.00</Text22>
        </FlexColumn2>
        <Image2 src={`https://file.rendit.io/n/yI0LJmTZcD6VYBW356Og.png`} />
      </FlexRow2>
      <FlexColumn3>
        <BlackFlexColumn>
          <Text23>จำนวนเดิมพัน</Text23>
          <Text24>6.00</Text24>
        </BlackFlexColumn>
      </FlexColumn3>
      <FlexRow4>
        <FlexColumn4>
          <Text25>เดิมพันสูงสุด</Text25>
        </FlexColumn4>
        <FlexColumn5>
          <IndigoText>ยืนยัน</IndigoText>
        </FlexColumn5>
      </FlexRow4>
    </RectangleRootRootRoot>
  );
};

const Text2 = styled.div`
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 500;
  font-family: FC Iconic;
  white-space: nowrap;
`;
const Text18 = styled.div`
  margin: 0px 1px 0px 0px;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 500;
  font-family: FC Iconic;
  text-align: right;
  white-space: nowrap;
`;
const RectangleRootRootRoot = styled.div`
  height: 496px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 14px 0px;
  border-radius: 10px 10px 0px 0px;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: soft-light, normal;
  background-image: linear-gradient(180deg, #343b5f 0%, #262a40 100%),
    url(https://file.rendit.io/n/yprYzZh3CeVx0rnNxT1N.jpg),
    linear-gradient(180deg, #343b5f 0%, #262a40 100%);
`;
const FlexRow = styled.div`
  width: 265px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 20px 0px;
  padding: 0px 14px 0px 149px;
`;
const Text1 = styled.div`
  align-self: flex-end;
  color: #f9f9f9;
  font-size: 20px;
  font-weight: 700;
  font-family: FC Iconic;
  white-space: nowrap;
`;
const Image1 = styled.img`
  width: 18px;
  height: 18px;
`;
const FlexRow1 = styled.div`
  width: 388px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  margin: 0px 0px 21px 0px;
`;
const FlexRow2 = styled.div`
  width: 317px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 23px 0px;
  padding: 0px 55px 0px 56px;
`;
const BlackFlexRow = styled.div`
  left: 0px;
  top: 33px;
  position: absolute;
  gap: 76px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 9px 119px 10px 130px;
  background-color: rgba(0, 0, 0, 0.3);
`;
const FlexRow3 = styled.div`
  width: 93px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Text8 = styled.div`
  width: 19px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 500;
  font-family: FC Iconic;
  white-space: nowrap;
`;
const FlexColumn = styled.div`
  width: 38px;
  height: 151px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 87px 0px 0px;
`;
const Text11 = styled.div`
  align-self: stretch;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 500;
  font-family: FC Iconic;
  white-space: nowrap;
`;
const FlexColumn1 = styled.div`
  height: 151px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0px 137px 0px 0px;
`;
const Text14 = styled.div`
  align-self: flex-start;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 500;
  font-family: FC Iconic;
  white-space: nowrap;
`;
const FlexColumn2 = styled.div`
  width: 44px;
  height: 193px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
const Text22 = styled.div`
  align-self: stretch;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 500;
  font-family: FC Iconic;
  text-align: right;
  white-space: nowrap;
`;
const Image2 = styled.img`
  width: 341px;
  height: 27px;
  left: 43px;
  top: 19px;
  position: absolute;
  mix-blend-mode: screen;
`;
const FlexColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 0px 0px 15px 0px;
`;
const BlackFlexColumn = styled.div`
  width: 104px;
  height: 65px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6px 150px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0px);
  box-shadow: inset 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Text23 = styled.div`
  position: relative;
  color: #f9f9f9;
  font-size: 18px;
  font-family: FC Iconic;
  white-space: nowrap;
`;
const Text24 = styled.div`
  left: 167px;
  top: 26px;
  position: absolute;
  color: #eaa43b;
  font-size: 32px;
  font-weight: 600;
  font-family: FC Iconic;
  text-align: center;
  white-space: nowrap;
`;
const FlexRow4 = styled.div`
  width: 428px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexColumn4 = styled.div`
  width: 192px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text25 = styled.div`
  width: 100px;
  height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px -4px;
  padding: 12px 50px;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 700;
  font-family: FC Iconic;
  white-space: nowrap;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/mgpW6fxZBKkblbUWWWK6.png");
`;
const FlexColumn5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const IndigoText = styled.div`
  width: 46px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px 73px 13px 73px;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 700;
  font-family: FC Iconic;
  white-space: nowrap;
  border-radius: 10px;
  background-color: #998fe6;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: luminosity, normal;
  background-image: url(https://file.rendit.io/n/O18lo9vjItZ6JepDdDkF.jpg),
    linear-gradient(180deg, #5d56ac 0%, #3c3779 100%);
  box-shadow: inset 2px 2px 7px 0px rgba(255, 255, 255, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
