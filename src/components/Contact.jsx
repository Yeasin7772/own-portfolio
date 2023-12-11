
const Contact = () => {
    return (
        <div  className=" ">
            <h2 data-aos="fade-right" className="text-[52px] font-semibold
             mb-8 leading-normal uppercase text-teal-500 text-center">CONTACT ME </h2>
            <div className="flex flex-col  sm:flex-row justify-center items-center lg:gap-36 mb-10  p-5 rounded sm:p-8 md:p-10 lg:p-12 xl:p-16">
                <div className="space-y-2">
                    <p className="text-xl bg-primary text-white font-bold
                 border-dashed border-2 p-5 rounded">beahand@email.com</p>
                    <p className="text-xl bg-primary text-white font-bold
                 border-dashed border-2 p-5 rounded">+99 55 66 88 526</p>
                    <p className="text-xl bg-primary text-white font-bold
                 border-dashed border-2 p-5 rounded">Bangladesh, Khulna</p>
                  
                </div>


                <div >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="form-control ">
                            <label className="label">
                               
                            </label>
                            <input type="text" name="food_name" className=" text-white input input-bordered bg-gray-700" placeholder="Enter Your Name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                               
                            </label>
                            <input type="email" name="email" placeholder="Enter Your email " className="input input-bordered bg-gray-700" required />
                        </div>
                       
                       



                    </div>
                    <div className="form-control">
                        <label className="label">
                           
                        </label>
                        <textarea className="textarea textarea-info h-44 bg-gray-700" placeholder="Write Your Message....."></textarea>

                    </div>
                    <div className="mt-4">
                        <button className="btn btn-outline btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;