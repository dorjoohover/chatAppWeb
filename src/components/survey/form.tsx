import { addToCart } from "@/lib/action";
import { FC } from "react";
import { useFormState } from "react-dom";
const initialState = {
  success: true,
  cartSize: 0,
  message: undefined,
};
type Form = {
  itemID: string;
  itemTitle: string;
};
export const AddToCartForm: FC<Form> = ({ itemID, itemTitle }) => {
  const [formState, formAction] = useFormState(addToCart, initialState);
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {formState?.success && (
        <div className="toast">
          Added to cart! Your cart now has {formState.cartSize} items.
        </div>
      )}
      {formState?.success === false && (
        <div className="error">Failed to add to cart: {formState.message}</div>
      )}
    </form>
  );
};
