"use client";

import React from "react";

interface ProductMiniCardProps {
  imageUrl: string;
  text: string;
  link?: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  activeBackgroundColor?: string;
  isActive?: boolean;
  imageSize?: number;
  imageLeftOffset?: number;
  imageAreaWidth?: string;
  textAreaWidth?: string;
}

const ProductMiniCard: React.FC<ProductMiniCardProps> = ({
  imageUrl,
  text,
  link,
  onClick,
  backgroundColor = "#A979B2",
  textColor = "#FFFFFF",
  activeBackgroundColor,
  isActive = false,
  imageSize = 70,
  imageLeftOffset = -15,
  imageAreaWidth = "30%",
  textAreaWidth = "70%",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const currentBgColor = isActive && activeBackgroundColor
    ? activeBackgroundColor
    : backgroundColor;

  // 共用的樣式
  const commonStyle = {
    display: "flex",
    width: "250px",
    height: "100px",
    backgroundColor: currentBgColor,
    borderRadius: "8px",
    overflow: "visible",
    position: "relative" as const,
    textDecoration: "none",
    boxShadow: isActive
      ? `0 2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.1)`
      : "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: isActive ? `2px solid ${activeBackgroundColor || backgroundColor}` : "2px solid transparent",
    transition: "all 0.3s ease",
    transform: isActive ? "scale(0.98)" : "scale(1)",
    cursor: "pointer",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setIsHovered(true);
    if (!isActive) {
      e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
      e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setIsHovered(false);
    if (!isActive) {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  // 如果有 onClick，渲染為 div；否則渲染為 a
  const Wrapper = onClick ? "div" : "a";
  const wrapperProps = onClick
    ? { onClick: handleClick }
    : { href: link || "#" };

  return (
    <Wrapper
      {...wrapperProps}
      className="product-mini-card"
      style={commonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 左邊圖片區 */}
      <div
        className="image-section"
        style={{
          width: imageAreaWidth,
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        <img
          src={imageUrl}
          alt={text}
          style={{
            position: "absolute",
            width: `${imageSize}px`,
            height: "auto",
            transform: isHovered && !isActive ? "rotate(-10deg) scale(1.05)" : "rotate(-15deg)",
            left: `${imageLeftOffset}px`,
            filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      {/* 右邊文字區 */}
      <div
        className="text-section"
        style={{
          width: textAreaWidth,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: "8px",
        }}
      >
        <span
          style={{
            color: textColor,
            fontSize: "40px",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          {text}
        </span>
      </div>
    </Wrapper>
  );
};

export default ProductMiniCard;
