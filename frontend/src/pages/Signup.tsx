import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";
const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Auth />
      </div>
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
