import React, { useEffect, useRef, useState, useId } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Minus, Plus, Check, Loader2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MAX_GUESTS = 8;

const guestLabel = (n) => {
  if (n === 1) return "1 Person";
  if (n >= MAX_GUESTS) return `${MAX_GUESTS}+ People`;
  return `${n} People`;
};

const Reserve = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const formId = useId();

  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | confirmed

  const errors = {
    name: name.trim().length === 0 ? "Enter your name" : null,
    date: date.length === 0 ? "Pick a date" : null,
    time: time.length === 0 ? "Pick a time" : null,
  };
  const isValid = !errors.name && !errors.date && !errors.time;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true, // recompute start values on refresh
        },
      });

      tl.from(sectionRef.current.querySelectorAll(".reserve-left > *"), {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }).from(
        formRef.current,
        { opacity: 0, y: 40, scale: 0.97, duration: 0.8, ease: "power3.out" },
        "-=0.5",
      );

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const adjustGuests = (delta) => {
    setGuests((g) => Math.min(MAX_GUESTS, Math.max(1, g + delta)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid || status === "submitting") return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("confirmed"), 900);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background */}
      <img
        src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782718620/restroimg_vxnr3j.jpg"
        alt="Restaurant"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-20 lg:px-32 grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* Left Content */}
        <div className="reserve-left">
          <p className="text-orange-300 uppercase tracking-[0.45em] text-sm">
            Reservation
          </p>

          <h1 className="mt-6 text-white font-serif font-bold text-6xl md:text-8xl leading-[0.9]">
            Your Table
            <br />
            Awaits
          </h1>

          <p className="mt-8 max-w-xl text-gray-200 text-lg leading-relaxed">
            Experience unforgettable dining with handcrafted dishes, elegant
            atmosphere and warm hospitality. Reserve your perfect moment with
            us.
          </p>

          {/* Steps — a real sequence: pick a date, say how many, lock it in */}
          <div className="mt-12 flex gap-10">
            <div>
              <h3 className="text-orange-300 text-3xl font-serif">01</h3>
              <p className="text-gray-300 text-sm">Choose Date</p>
            </div>
            <div>
              <h3 className="text-orange-300 text-3xl font-serif">02</h3>
              <p className="text-gray-300 text-sm">Select Guests</p>
            </div>
            <div>
              <h3 className="text-orange-300 text-3xl font-serif">03</h3>
              <p className="text-gray-300 text-sm">Confirm</p>
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-4xl p-8 md:p-10 shadow-2xl"
        >
          {status === "confirmed" ? (
            <div className="flex flex-col items-center text-center py-10">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-6">
                <Check className="text-white" size={28} strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-serif text-gray-900">
                Table Reserved
              </h2>
              <p className="mt-3 text-gray-500 max-w-xs">
                {name.split(" ")[0]}, we'll see you on{" "}
                {date &&
                  new Date(date + "T00:00:00").toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                  })}{" "}
                at {time} for {guestLabel(guests).toLowerCase()}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setTouched(false);
                  setName("");
                  setDate("");
                  setTime("");
                  setGuests(2);
                }}
                className="mt-8 text-sm font-semibold text-gray-500 underline underline-offset-4 hover:text-orange-500 transition-colors"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-gray-900">
                  Book A Table
                </h2>
                <p className="mt-2 text-gray-500">
                  Choose your preferred dining time
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor={`${formId}-date`}
                    className="text-sm text-gray-500"
                  >
                    Date
                  </label>
                  <input
                    id={`${formId}-date`}
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`mt-2 w-full p-4 rounded-xl bg-gray-100 outline-none ring-1 ring-transparent transition-shadow focus:ring-2 focus:ring-orange-400 ${
                      touched && errors.date ? "ring-2 ring-red-400" : ""
                    }`}
                  />
                  {touched && errors.date && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.date}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Guests — stepper so solo diners (and any count up to 8+) feel
                      like a first-class choice, not an afterthought in a dropdown */}
                  <div>
                    <label className="text-sm text-gray-500">Guests</label>
                    <div className="mt-2 flex items-center justify-between p-2 rounded-xl bg-gray-100">
                      <button
                        type="button"
                        onClick={() => adjustGuests(-1)}
                        disabled={guests <= 1}
                        aria-label="Decrease guests"
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-gray-700 shadow-sm transition-all hover:bg-orange-500 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-700 active:scale-90"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="text-sm font-medium text-gray-900 text-center flex-1 leading-tight">
                        {guestLabel(guests)}
                      </span>

                      <button
                        type="button"
                        onClick={() => adjustGuests(1)}
                        disabled={guests >= MAX_GUESTS}
                        aria-label="Increase guests"
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-gray-700 shadow-sm transition-all hover:bg-orange-500 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-700 active:scale-90"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-time`}
                      className="text-sm text-gray-500"
                    >
                      Time
                    </label>
                    <input
                      id={`${formId}-time`}
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className={`mt-2 w-full p-4 rounded-xl bg-gray-100 outline-none ring-1 ring-transparent transition-shadow focus:ring-2 focus:ring-orange-400 ${
                        touched && errors.time ? "ring-2 ring-red-400" : ""
                      }`}
                    />
                    {touched && errors.time && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.time}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-label="Your name"
                    className={`w-full p-4 rounded-xl bg-gray-100 outline-none ring-1 ring-transparent transition-shadow focus:ring-2 focus:ring-orange-400 ${
                      touched && errors.name ? "ring-2 ring-red-400" : ""
                    }`}
                  />
                  {touched && errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-xl bg-black text-white font-semibold text-lg transition-all duration-300 hover:bg-orange-500 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Finding Your Table
                    </>
                  ) : (
                    "Find A Table"
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Instant confirmation • Premium dining experience
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Reserve;
