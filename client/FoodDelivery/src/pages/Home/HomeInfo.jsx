import { useState } from "react";

import { Box, Button, Typography, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const data = [
  {
    id: 1,
    title: "Nhanh nhất",
    infor: "FDFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.",
  },
  {
    id: 2,
    title: "Dễ dàng nhất",
    infor:
      "Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng FDFood của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.",
  },
  {
    id: 3,
    title: "Đáp ứng mọi nhu cầu",
    infor:
      "Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.",
  },
  {
    id: 4,
    title: "Thanh toán dễ dàng",
    infor:
      "Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng PayPal thậm chí còn dễ dàng hơn nữa.",
  },
  {
    id: 5,
    title: "Nhiều quà tặng hơn",
    infor:
      "Tích điểm FDRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.",
  },
];

const questions = [
  {
    id: 1,
    title: "Does FDFood provide food delivery 24x7?",
    content:
      "We understand only one language - food, so yes, we do.. Please note, though we are here as your 24x7 food partners, few of our listed restaurants may have late-night food delivery restrictions or may be unavailable for orders. But we have listed the ones that love your late-night binging in our Late Night Delivery Section.",
  },
  {
    id: 2,
    title: "Does FDFood accept Cash?",
    content:
      "Sure, we do! FDFood accepts all forms of payments for food delivery services, including cash on delivery.",
  },
  {
    id: 3,
    title: "How much does FDFood charge for delivery?",
    content:
      "Our delivery fee depends on a lot of operational factors like distance from your location to the restaurant. You can check the exact amount you are paying as delivery charges before checking out on the app. There is also a “Free Delivery” section that lists restaurants near you that don’t charge for delivery.",
  },
  {
    id: 4,
    title: "Does FDFood have a minimum order?",
    content:
      "Yes! But you can pay the difference if your order is less than the minimum order amount.",
  },
];

const WhyChoose = () => {
  return (
    <>
      <Typography
        variant="h1"
        marginBottom={{}}
        sx={{
          fontWeight: "600",
          fontSize: "40px",
          textOverflow: "ellipsis",
          margin: "45px 18px 48px 18px",
        }}
      >
        <span>Why should you Order on FDFood?</span>
      </Typography>
      <Box sx={{ margin: "0px 20px" }}>
        {data.map((item) => (
          <Box display={"flex"} margin={"10px 0px"} key={item.id}>
            <CheckIcon color="error" sx={{ marginRight: "10px" }} />
            <Typography>
              <span style={{ fontWeight: "600" }}>{item.title}</span>
              <span style={{ margin: "0px 2px" }}>{" - "}</span>
              {item.infor}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

const FrequentlyQuestion = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "left", margin: "0 18px" }}>
      <Typography
        variant="h1"
        marginBottom={{}}
        sx={{
          fontWeight: "600",
          fontSize: "40px",
          textOverflow: "ellipsis",
          margin: "52px 0px 40px",
        }}
      >
        <span>Frequently Asked Questions</span>
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: "30px",
          fontWeight: "600",
          marginBottom: "16px",
        }}
      >
        What is FDFood?
      </Typography>
      <Typography marginBottom={"5px"} width={"95%"}>
        FDFood is the fastest Food Delivery service in Vietnam. We have curated
        all your favorite dishes, restaurants, and cuisines to help you grab
        your food in the easiest, quickest way possible. Find and order your
        favorite cuisines across Vietnam - order food online in just a few taps,
        from Lifted Coffee Brunch - Hàng Gà for Breakfast, Maazi Indian - Nhà
        Hàng Ấn Độ for Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are
        here to satisfy your hunger with a wide selection of merchant partners
        in Vietnam.
      </Typography>
    </Box>
  );
};

const ListQuestions = () => {
  return (
    <Box sx={{ width: "97%", margin: "auto" }}>
      {questions.map((item) => (
        <Box key={item.id} margin={"30px 0px"}>
          <Divider />
          <Typography
            variant="h5"
            fontWeight={"600"}
            fontSize={"30px"}
            sx={{ margin: "30px 0px 16px 0px" }}
          >
            {item.title}
          </Typography>
          <Typography>{item.content}</Typography>
        </Box>
      ))}
    </Box>
  );
};

const HomeInfo = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(true);
  };

  return (
    <Box
      sx={{
        textAlign: "left",
        padding: "40px 0px 28px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <WhyChoose />
      <FrequentlyQuestion />
      {readMore ? (
        <ListQuestions />
      ) : (
        <Button
          variant="outlined"
          color="error"
          sx={{
            width: "96%",
            margin: "auto",
            height: "50px",
            fontSize: "18px",
            fontWeight: "600",
          }}
          onClick={handleReadMore}
        >
          READ MORE
        </Button>
      )}
    </Box>
  );
};

export default HomeInfo;
