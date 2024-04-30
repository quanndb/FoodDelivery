import { Box, Grid, Paper, Typography } from "@mui/material";

const data = [
  { id: 1, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 2, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 3, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 4, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 5, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 6, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 7, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 8, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 9, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 10, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 11, url: "./static/images/com.png", name: "Cơm tấm" },
  { id: 12, url: "./static/images/com.png", name: "Cơm tấm" },
];

const TypeFood = ({ item }) => {
  return (
    <Paper elevation={3} className="foodItem">
      <Box>
        <Box
          component={"a"}
          href="/"
          sx={{
            textDecoration: "none",
            color: "#000",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="foodImg"
            style={{ borderRadius: "8px", padding: "12px" }}
          >
            <img
              src={item.url}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
          <Typography
            variant="h5"
            sx={{
              margin: "10px 0px",
              fontWeight: "700",
              padding: "0px 10px 20px 15px",
            }}
          >
            {item.name}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const FoodType = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "left", padding: "40px 0px 28px" }}>
      <Typography
        variant="h1"
        noWrap
        marginBottom={{}}
        sx={{
          fontWeight: "600",
          fontSize: "40px",
          textOverflow: "ellipsis",
          margin: "45px 18px 48px 18px",
        }}
      >
        <span>There's something for everyone!</span>
      </Typography>
      <Grid
        container
        spacing={4}
        columns={{ xs: 4, sm: 6, md: 12 }}
        sx={{ padding: "0px 20px" }}
      >
        {data.map((item) => (
          <Grid key={item.id} item xs={2} sm={2} md={3}>
            <TypeFood item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoodType;
