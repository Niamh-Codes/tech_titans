
import React from "react";
import Users from "../../assets/users.json"

function Footer() {
  return (
    <>
      <footer className="bg-green-custom h-82">
        <div className="pt-14 pl-14">
          <div className="pb-8">
            <h2 className="text-white">HelloCurio is designed by</h2>
          </div>
        </div>

        <div>
          <div className="flex gap-4 justify-evenly">
            {Users.map((user) => (
              <FooterUserCard imgSrc={user.imgSrc} name={user.name} />
            ))}
          </div>

          <div className="text-white flex justify-center py-6">
                <h2>2024</h2>
            </div>
            

        </div>
      </footer>
    </>
  );
}

export const FooterUserCard = ({imgSrc, name}) => {
  return (
    <div className="mb-0">
      <div className="mb-6 flex justify-center">
        <img
          src={imgSrc}
          className="w-32 rounded-full shadow-lg dark:shadow-black/30"
        />
      </div>
      <h5 className="mb-4 text-xl font-semibold text-white">{name}</h5>
    </div>
  )
}

export default Footer;

