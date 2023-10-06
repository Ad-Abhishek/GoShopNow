import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {  useSearchParams  } from 'react-router-dom';

const PlaceOrderScreen = () => {

    const [data, setData] = useState()
    const [searchParams] = useSearchParams();

    const token = localStorage.getItem('jwt');

    const headers = {
        'Authorization' : `Bearer ${token}`
    }

    useEffect(()=>{
        const params = {}
        for(const [key,value] of searchParams){
            params[key] = value
        }
        setData(params)
   },[searchParams])

   let payment_status = '';
   let success_screen = 'https://a.khalti.com/go/?t=kpg&pidx=uDNqXPxv7GyN6mVi8GMTnP'

   function verifyPurchase(){
        // let url =  `http://127.0.0.1:8000/api/payment/validate/?amount=28000&mobile=98XXXXX001&pidx=uDNqXPxv7GyN6mVi8GMTnP&purchase_order_id=ceaca50d-9fdc-4629-9019-10594fc858f3&purchase_order_name=ceaca50d-9fdc-4629-9019-10594fc858f3&transaction_id=GTfRkSSN55WAq4YLvogAyJ&txnId=Yp6c5dVwWfXszzk5YfeqiJ`;
        let url = `http://127.0.0.1:8000/api/payment/validate/?pidx=${data.pidx}&txnId=${data.txnId}&amount=${data.amount}&mobile=${data.mobile}&purchase_order_id=${data.purchase_order_id}&purchase_order_name=${data.purchase_order_name}&transaction_id=${data.transaction_id}`;
        
        console.log("payment verification URL" + url);
        axios
            .get(url,{headers})
            .then((res) => {
                console.log(res.data);
                payment_status = res.data.status;
            })
            .catch((err) => {
                console.log(err)
            })

            if(payment_status === 'Completed') {
                window.location.replace(success_screen);
            }
   }

  return (
    <>
       <Button
           onClick={()=>{verifyPurchase()}}
        >
            Check Payment Status
        </Button>
    </>  
  )
}

export default PlaceOrderScreen