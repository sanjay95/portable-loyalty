import { discount } from '../utils/constants';
import { BsCreditCardFill } from "react-icons/bs";
import { MdLoyalty } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";

const Sale = () => {
  return (
    <>
      {discount > 0 && discount < 1 ? (
        <div style={{display:'flex', height:'5rem', width:'100%', alignItems:'center', justifyContent:'center', backgroundColor:'black', color:'white'}}>
          <a href="http://localhost:3000" style={{display:'flex', alignItems:'center', marginRight:'2rem'}}>
            <BsCreditCardFill style={{marginRight:'1rem'}} />
            <p style={{marginRight:'10rem'}}>Buy Smart Living Gift Card</p>
          </a>
          <a href="https://example.com" style={{display:'flex', alignItems:'center', marginRight:'2rem'}}>
            <MdLoyalty style={{marginRight:'1rem'}} />
            <p style={{marginRight:'10rem'}}>Register for Smart Family</p>
          </a>
          <a href="https://example.com" style={{display:'flex', alignItems:'center'}}>
            <TbDiscount style={{marginRight:'1rem'}} />
            <p>{Math.round(discount * 100)}% Discount for All Products</p>
          </a>
        </div>
      ) : null}
    </>
  );
};

export default Sale;
