import { Footer } from 'flowbite-react';
import { BsDribbble } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsDribble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Card } from 'flowbite-react';

export default function FooterSitemapLinks() {
  return (
    <Footer bgDark>
      <div className="w-full bg-gray-200 text-white">
        <div className="bg-grey-200 text-white text-lg grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div className="bg-grey-200 text-white text-lg" >
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                About
              </Footer.Link>
              <Footer.Link href="#">
                Careers
              </Footer.Link>
              <Footer.Link href="#">
                Brand Center
              </Footer.Link>
              <Footer.Link href="#">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="bg-grey-200 text-white text-lg">
            <Footer.Title title="Help Center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Discord Server
              </Footer.Link>
              <Footer.Link href="#">
                Twitter
              </Footer.Link>
              <Footer.Link href="#">
                Facebook
              </Footer.Link>
              <Footer.Link href="#">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="bg-grey-200 text-white text-lg">
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Licensing
              </Footer.Link>
              <Footer.Link href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="bg-grey-200 text-white text-lg">
            <Footer.Title title="Download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Android
              </Footer.Link>
              <Footer.Link href="#">
                Windows
              </Footer.Link>
              <Footer.Link href="#">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="bg-grey-200 text-white text-lg">
          <Card>
            <div className="bg-grey-200 text-white">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              Work fast from anywhere
            </h5>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
              Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <a
                className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                href="#"
              >
                
                <div className="text-left">
                  <div className="mb-1 text-xs">
                    Download on the
                  </div>
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    Mac App Store
                  </div>
                </div>
              </a>
              <a
                className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                href="#"
              >
                
                <div className="text-left">
                  <div className="mb-1 text-xs">
                    Get in on
                  </div>
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    Google Play
                  </div>
                </div>
              </a>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="VigneshK™"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
