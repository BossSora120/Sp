<template>
    <section id="pricing-1" class="gr--whitesmoke pb-40 inner-page-hero pricing-section">
        <div class="container">
            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                    <div class="section-title mb-70">
                        <!-- Title -->
                        <h2 class="s-52 w-700">Simple, Flexible Pricing</h2>
                        <!-- TOGGLE BUTTON -->
                        <div class="toggle-btn ext-toggle-btn toggle-btn-md mt-30">
                            <span class="toggler-txt">Billed monthly</span>
                            <label class="switch-wrap">
                                <input type="checkbox" id="checbox" @change="togglePrices" />
                                <span class="switcher bg--grey switcher--theme">
                                    <span class="show-annual"></span>
                                    <span class="show-monthly"></span>
                                </span>
                            </label>
                            <span class="toggler-txt">Billed yearly</span>
                            <!-- Text -->
                            <p class="color--theme">Save up to 35% with yearly billing</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END SECTION TITLE -->
            <!-- PRICING TABLES -->
            <div class="pricing-1-wrapper">
                <div class="row row-cols-1 row-cols-md-3">
                    <!-- STARTER PLAN -->
                    <div class="col">
                        <div id="pt-1-1" class="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                            <!-- TABLE HEADER -->
                            <div class="pricing-table-header">
                                <!-- Title -->
                                <h5 class="s-24 w-700">Free Plan</h5>
                                <!-- Price -->
                                <div class="price">
                                    <sup class="color--black">$</sup>
                                    <span class="color--black">0</span>
                                    <sup class="validity color--grey">&nbsp;/&ensp;forever</sup>
                                    <p class="color--grey">For professionals getting started with smaller projects.</p>
                                </div>
                                <!-- Button -->
                                <a href="#" class="pt-btn btn r-04 btn--theme hover--theme">Get srarted - it's free</a>
                                <p class="p-sm btn-txt text-center color--grey">editcard required</p>
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25">
                                <li>
                                    <p><span class="flaticon-check"></span> สมัครมหาลัย (จำกัด 3 ครั้ง)</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> สร้าง Portfolio ออนไลน์</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Export PDF</p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <!-- END STARTER PLAN -->
                    <!-- BASIC PLAN -->
                    <div class="col">
                        <div id="pt-1-2" class="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                            <!-- TABLE HEADER -->
                            <div class="pricing-table-header">
                                <!-- Title -->
                                <h5 class="s-24">Pro (School/Teacher)</h5>
                                <!-- Price -->
                                <div class="price">
                                    <!-- Monthly Price -->
                                    <div class="price2" v-if="showPrice2">
                                        <sup class="color--black">$</sup>
                                        <span class="color--black">16.99</span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;mo</sup>
                                    </div>
                                    <!-- Yearly Price -->
                                    <div class="price1" v-if="showPrice1">
                                        <sup class="color--black">$</sup>
                                        <span class="color--black">142.75</span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;yr</sup>
                                        <!-- Discount Badge -->
                                        <div class="pricing-discount bg--yellow-400 color--black r-36">
                                            <h6 class="s-17">Save 30%</h6>
                                        </div>
                                    </div>
                                    <!-- Text -->
                                    <p class="color--grey">For personal use or small teams with simple workflows.</p>
                                </div>
                                <!-- End Price -->
                                <!-- Button -->
                                <a href="#" class="pt-btn btn r-04 btn--theme hover--theme">Start 14-day trial</a>
                                <p class="p-sm btn-txt text-center color--grey">7-Day Money Back Guarantee</p>
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25">
                                <li>
                                    <p><span class="flaticon-check"></span>Analytics Report</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Dashboard นักเรียน</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Portfolio Review ไม่จำกัด </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- END BASIC PLAN -->
                    <!-- ADVANCED PLAN -->
                    <div class="col">
                        <div id="pt-1-3" class="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                            <!-- TABLE HEADER -->
                            <div class="pricing-table-header">
                                <!-- Title -->
                                <h5 class="s-24">Enterprise (University)</h5>
                                <!-- Price -->
                                <div class="price">
                                    <!-- Monthly Price -->
                                    <div class="price2" v-if="showPrice2">
                                        <sup class="color--black">$</sup>
                                        <span class="color--black">24.99</span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;mo</sup>
                                    </div>
                                    <!-- Yearly Price -->
                                    <div class="price1" v-if="showPrice1">
                                        <sup class="color--black">$</sup>
                                        <span class="color--black">194.99</span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;yr</sup>
                                        <!-- Discount Badge -->
                                        <div class="pricing-discount bg--yellow-400 color--black r-36">
                                            <h6 class="s-17">Save 35%</h6>
                                        </div>
                                    </div>
                                    <!-- Text -->
                                    <p class="color--grey">For growing teams that need more services and flexibility.</p>
                                </div>
                                <!-- End Price -->
                                <!-- Button -->
                                <a href="#" class="pt-btn btn r-04 btn--theme hover--theme">Upgrade your plan</a>
                                <p class="p-sm btn-txt text-center color--grey">7-Day Money Back Guarantee</p>
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25">
                                <li>
                                    <p><span class="flaticon-check"></span> University Dashboard</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> AI Screening Applicants</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Direct Application Management</p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <!-- END ADVANCED PLAN -->
                </div>
            </div>
            <!-- PRICING TABLES -->
        </div>
        <!-- End container -->
    </section>
</template>

<script>
export default {
    data() {
        return {
            showPrice1: false,
            showPrice2: true
        };
    },
    methods: {
        togglePrices() {
            this.showPrice1 = !this.showPrice1;
            this.showPrice2 = !this.showPrice2;
        }
    }
};
</script>
