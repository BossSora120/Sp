<template>
    <section id="contacts-1" class="pb-50 inner-page-hero contacts-section division">
        <div class="container">
            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-9">
                    <div class="section-title text-center mb-80">
                        <!-- Title -->
                        <h2 class="s-52 w-700">Get in Touch</h2>
                        <!-- Text -->
                        <p class="p-lg">Whether you have questions, need more information, or want to explore partnership opportunities — our team is here to help.</p>
                    </div>
                </div>
            </div>
            <!-- CONTACT FORM -->
            <div class="row justify-content-center">
                <div class="col-md-11 col-lg-10 col-xl-8">
                    <div class="form-holder">
                        <form name="contactform" class="row contact-form">
                            <!-- Form Select -->
                            <!-- Contact Form Input -->
                            <div class="col-md-12">
                                <p class="p-lg">Your Name:</p>
                                <span>Please enter your full name. </span>
                                <input type="text" name="name" class="form-control name" placeholder="Your Name*" />
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Email Address:</p>
                                <span>lease provide a valid email address.</span>
                                <input type="text" name="email" class="form-control email" placeholder="Email Address*" />
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">School or University:</p>
                                <span>Please specify your school or university.</span>
                                <input type="text" name="sohool & university" class="form-control school" placeholder="School or University*" />
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Message</p>
                                <span></span>
                                <textarea class="form-control message" name="message" rows="6" placeholder="Please explain your question or issue in detail..."></textarea>
                            </div>
                            <!-- Contact Form Button -->
                            <div class="col-md-12 mt-15 form-btn text-right">
                                <button type="submit" class="btn btn--theme hover--theme submit">Send Message</button>
                            </div>
                            <div style="margin-top: 40px;">
                                <!-- หัวข้อ -->
                                <p style="margin: 0; font-weight: bold;">Infomation</p>
                                <!-- เนื้อหาใต้หัวข้อ -->
                                <div style="display: flex; gap: 20px; align-items: center; margin-top: 5px; justify-content: flex-start;">
                                    <span>📧 <a href="mailto:info@educonnext.com">info@educonnext.com</a></span>
                                    <span>📍 Bangkok, Thailand</span>
                                </div>
                            </div>
                            <div class="contact-form-notice">
                                <p class="p-sm">We will use your information to respond to your inquiry and share relevant EduConnext updates. Your data is secure, and you can unsubscribe anytime <br><NuxtLink to="/privacy">Privacy Policy</NuxtLink></p>
                            </div>
                            <!-- Contact Form Message -->
                            <div class="col-lg-12 contact-form-msg">
                                <span class="loading"></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END CONTACT FORM -->
        </div>
        <!-- End container -->
    </section>
    <hr class="divider" />
</template>

