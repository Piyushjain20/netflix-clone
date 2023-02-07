import React from "react";
import { useState, useEffect } from "react";
import "./PlanScreen.css";
import db from "../firebase";
import { collection, getDocs, where, query, doc, addDoc, onSnapshot } from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";

export default function PlanScreen({ user }) {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const fn = async () => {
      const querySnapshot = await getDocs(collection(doc(db, "customers", user.uid), "subscriptions"));
      querySnapshot.forEach(async (subscription) => {
        setSubscription({
          selectedPlan: subscription.data().role,
          validTill: subscription.data().current_period_end.seconds,
          startFrom: subscription.data().current_period_start.seconds,
        });
      });
    };
    fn();
  }, []);

  useEffect(() => {
    const fn = async () => {
      const allProducts = {};
      const q = query(collection(db, "products"), where("active", "==", true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (productDoc) => {
        allProducts[productDoc.id] = productDoc.data();
        const priceSnap = await getDocs(collection(productDoc.ref, "prices"));
        priceSnap.forEach((price) => {
          allProducts[productDoc.id].price = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
      setProducts(allProducts);
    };
    fn();
  }, []);
  const loadCheckout = async (priceId) => {
    const docRef = await addDoc(collection(doc(db, "customers", user.uid), "checkout_sessions"), {
      price: priceId,
      success_url: window.location.origin + "/browse",
      cancel_url: window.location.origin + "/profile",
    });
    onSnapshot(docRef, async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occured : ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe("pk_test_51MWf0RSFySDolAOfY6bS3wwTNRd4kh9qiJBsKHbi6empBh1tvnQqDK54hcfYyNKdk4pPkVbT1eXIotytmetxqqPw006mYY0zlz");
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  // console.log(subscription);
  // const renewal__date = new Date(subscription?.validTill).toDateString();
  return (
    <div className="planScreen">
      {subscription && <p className="renewal__date">Renewal date: {new Date(subscription?.validTill * 1000).toLocaleDateString()}</p>}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPlan = productData.name.includes(subscription?.selectedPlan);

        return (
          <div className="plan__tile" key={productId}>
            <div className="plan__info">
              <h4 className="plan__name">{productData.name}</h4>
              <h6 className="plan__desc">{productData.description}</h6>
            </div>
            <button className="plan__btn" onClick={() => !isCurrentPlan && loadCheckout(productData.price.priceId)} disabled={isCurrentPlan}>
              {isCurrentPlan ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
const dateCreater = () => {
  return;
};
