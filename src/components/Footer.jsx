import React from "react";

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
          <div className="grid gap-6 text-center md:grid-cols-6 lg:gap-12">

            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold text-white">Maria Smantha</h5>
            </div>


            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold text-white">Lisa Cudrow</h5>
            </div>

            
            <div className="mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold text-white">John Smith</h5>
            </div>

            <div className="mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold text-white">John Smith</h5>
            </div>

            <div className="mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold text-white">John Smith</h5>
            </div>

            <div className="mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold text-white">John Smith</h5>
            </div>
          </div>

          <div className="text-white flex justify-center">
                <h2>2024</h2>
            </div>
            

        </div>
      </footer>
    </>
  );
}

export default Footer;

