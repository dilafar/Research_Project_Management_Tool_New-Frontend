import { Badge, Button } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React ,{useState , useEffect} from "react";
import styled from "styled-components";
import { mobile } from "../homeNav2/responsive";
import {Link , useLocation , useNavigate} from 'react-router-dom';
import {

  Menu,
  MenuItem,
  

} from "@mui/material";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType  from '../../constants/actionTypes';

const Container = styled.div`
  height: 80px;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem2 = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const HomeNavbar = () => {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [state , setstate] = useState(false);
  const [adminNav , setadminNav] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
 
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate("/");

    setUser(null);
  };
  /*useEffect(() => {
    const token = user?.token;
    //console.log(user.result);
    if (token) {
      const decodedToken = decode(token);
      console.log(decodedToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);*/
  
  
 

  

  useEffect(() => {
    const token = user?.result;

   /* if (token) {
      console.log(token.isFarmer);
      if(token.isFarmer === "Approved"){
          setstate(true);
      }else if(token.firstName === "admin"){
           setadminNav(true);
      }
      
    }*/

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <div >
    <Container >
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>  
        <Center>
          <Logo>EMA FARMHOUSE.</Logo>
        </Center>
        <Right>
        <MenuItem2><Button  component={Link} to="/" variant="contained"> Home</Button></MenuItem2>
        {state && (
          <>
        <MenuItem2><Button  component={Link} to="/seller"  variant="contained"> Go to Seller</Button></MenuItem2>
        </>
        )}
         {adminNav && (
          <>
        <MenuItem2><Button  component={Link} to="/admin"  variant="contained"> Go to Admin</Button></MenuItem2>
        </>
        )}
        <MenuItem2><Button  component={Link} to="/product"  variant="contained"> View Products</Button></MenuItem2>
          { user ? (
          <MenuItem2><Button variant="contained"  onClick={logout}> LOGOUT </Button></MenuItem2>):(
            <MenuItem2><Button component={Link} to="/auth" variant="contained"> SIGN IN </Button></MenuItem2>)}
          
         
         
         
        </Right>
      </Wrapper>
    </Container>
    </div>
  )
}

export default HomeNavbar;