import { Client } from "@/graphql/apollo";
import { VerifyEmailDocument } from "@/graphql/generated";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function useEmailverify() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("Email verify form");
  const [description, setDescription] = useState<string>("Please wait...");

  useEffect(() => {
    const token = router.query.token;
    const email = router.query["?email"];

    if (token && email) {
      console.log(token, email);
      const verifyEmail = async () => {
        const res = await Client.mutate({
          mutation: VerifyEmailDocument,
          variables: {
            email: email,
            token: token,
          },
        });
        console.log(res);
        const data = res.data.verifyEmail.response;

        if (data.status === "success") {
          toast.success(data.message);
          router.push("/login");
          setTitle("Your email is verify");
        } else {
          setTitle("Your email is not verify");

          toast.error(data.message);
        }
        setDescription(data.message);
      };
      verifyEmail();
    } else {
      setTitle("Your email is not verify");
      setDescription("Try again send email else one time");
    }
  }, [router]);

  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Empty Cart</h3>
                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                  <nav aria-label="breadcrumb">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="shop">Shop</Link>
                      </li>
                      <li className="active" aria-current="page">
                        Empty Cart
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="empty-cart-section section-fluid">
        <div className="emptycart-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
                <div className="email-verify text-center">
                  <h4 className="title">{title}</h4>
                  <h6 className="sub-title">{description}</h6>
                  <Link href="/shop" className="btn btn-lg btn-golden mt-8">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
