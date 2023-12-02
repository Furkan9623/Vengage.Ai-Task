import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { useNavigate } from "react-router-dom";

export default function SingleCard({ elem }) {
  const navigate = useNavigate();
  const { name, phone, _id } = elem;
  return (
    <Card sx={{ width: "fit-content", margin: "auto", padding: "1rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          sx={{ objectFit: "contain" }}
          image="https://media.istockphoto.com/id/135369573/photo/red-phone-isolated.jpg?s=612x612&w=0&k=20&c=cPOhxpOvlCUo9Oq9KOFH5ID5TVYTfJGZkjpoz3f6tVI="
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: "capitalize" }}
          >
            {name || "Md Furkan"}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            +91 {phone || "1234561234"}{" "}
            <PhoneEnabledIcon color="error" fontSize="medium" />
          </Typography>
        </CardContent>
        <Button
          size="small"
          variant="contained"
          color="warning"
          fullWidth
          onClick={() => navigate(`/update/${_id}`)}
          sx={{ fontWeight: 600 }}
        >
          EDIT CONTACT
        </Button>
      </CardActionArea>
    </Card>
  );
}
