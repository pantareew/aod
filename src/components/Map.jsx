export default function Map() {
  return (
    <div className="overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8139789017064!2d144.97419487589102!3d-37.8412405356089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6693aa464baf9%3A0x2984a0dc60079332!2s1650%2F470%20St%20Kilda%20Rd%2C%20Melbourne%20VIC%203004!5e0!3m2!1sth!2sau!4v1699769830808!5m2!1sth!2sau"
        className="w-full h-[60vh]"
        allowfullscreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
