// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { Box, TextField } from "@mui/material";

// function AllProducts() {
//   const [prod,setProd]=useState([])
//   const [search,setSearch]=useState("")
//   useEffect(()=>{
//     axios.get("https://dummyjson.com/products")
//     .then((res)=>{
//       console.log(res.data.products,1111)
//       setProd(res.data.products)
//     })
//     .catch((err)=>{
//     console.log(err,2222)
//     })
//   },[])
//   const handleChange=(e)=>{
//   setSearch((e.target.value).toLowerCase())
//   }
//   console.log(search,9999)
//   return (
    
//     <div style={{ padding: 10 }}>
//       <Box
//         sx={{
//           p: 1,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <TextField onChange={handleChange} label={"Search products here"} />
//       </Box>
//       <Grid
//         container
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: 3,
//           "& > :not(style)": {},
//         }}
//       >
//       {prod
//       .filter((value)=>(value.title).toLowerCase().includes(search))
//       .map((item)=>{
//         return(
//           <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             alt="Product image"
//             height="200"
//             width="200"
//             image={item.images}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {item.title}
//             </Typography>
//             <Typography gutterBottom variant="body2" color="text.secondary">
//               {item.category}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {item.description}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Typography variant="h5">₹{item.price}</Typography>

//             <Typography
//               variant="h5"
//               style={{ textAlign: "end", width: "100%" }}
//             >
//               {item.brand}
//             </Typography>
//           </CardActions>
//         </Card>
//         )
//       })} 
       
//       </Grid>
//     </div>
//   );
// }

// export default AllProducts;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";

function AllProducts() {
  const [prod, setProd] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products, 1111);
        setProd(res.data.products);
      })
      .catch((err) => {
        console.log(err, 2222);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredProducts = prod.filter((value) =>
    value.title.toLowerCase().includes(search)
  );

  return (
    <div style={{ padding: 10 }}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField onChange={handleChange} label={"Search products here"} />
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Card key={item.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Product image"
                height="200"
                width="200"
                image={item.images[0]}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="h5">₹{item.price}</Typography>

                <Typography
                  variant="h5"
                  style={{ textAlign: "end", width: "100%" }}
                >
                  {item.brand}
                </Typography>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            No items found
          </Typography>
        )}
      </Grid>
    </div>
  );
}

export default AllProducts;
