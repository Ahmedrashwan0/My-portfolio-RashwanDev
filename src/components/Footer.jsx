

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="  text-center py-12 px-4 md:text-sm  "
    >
      <p>
        &copy; {new Date().getFullYear()} Ahmed Rashwam. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
