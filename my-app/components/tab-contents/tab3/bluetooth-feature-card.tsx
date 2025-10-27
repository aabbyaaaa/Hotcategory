"use client";

import React from 'react';
import styled from 'styled-components';

const BluetoothFeatureCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="number">
          <p className="text">📌</p>
        </div>
        <div className="icon">
          <svg viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
            <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
          </svg>
        </div>
        <p className="heading">藍牙款特色</p>
        <p className="content">
          搭配行動裝置APP，提供四種測量顯示模式，適用於不同情況，包括圖形模式、表格模式、刻度盤模式和一般模式
        </p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 480px;
    background: #f5f5f5;
    border-radius: 10px;
    padding: 50px 30px;
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px #4445;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
  }

  .icon,
  .heading,
  .content {
    position: relative;
    z-index: 5;
    transition: all 0.5s;
  }

  .icon {
    width: 40px;
    fill: #b0a41a;
    margin-bottom: 20px;
  }

  .heading {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .number {
    position: absolute;
    top: -90px;
    right: -85px;
    padding: 80px 100px 30px 30px;
    background: #b0a41a;
    border-radius: 100%;
    z-index: 5;
  }

  .number .text {
    font-size: 28px;
    font-weight: 600;
    color: #fff;
  }

  .text {
    margin-top: 20px;
  }

  .number::after {
    content: "";
    width: 50px;
    height: 50px;
    background: #b0a41a ;
    position: absolute;
    border-radius: 100%;
    top: 50%;
    right: 50%;
    transition: all 0.5s;
    transform: translateX(50%) translateY(-50%);
    z-index: -1;
  }

  .card:hover {
    scale: 1.02;
    box-shadow: 0 5px 20px #444e;
  }

  .card:hover .number::after {
    width: 1100px;
    height: 1100px;
  }

  .card:hover .icon,
  .card:hover .heading,
  .card:hover .content {
    color: #f5f5f5;
    fill: #f5f5f5;
  }
`;

export { BluetoothFeatureCard };
