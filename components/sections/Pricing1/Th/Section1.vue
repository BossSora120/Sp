<template>
    <section id="pricing-1" class="gr--whitesmoke pb-40 inner-page-hero pricing-section">
        <div class="container">
            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                    <div class="section-title mb-70">
                        <!-- Title -->
                        <h2 class="s-52 w-700">แพ็คเกจที่เรียบง่ายและยืดหยุ่น</h2>
                        <span class="toggler-txt">ไม่ว่าคุณจะเป็นนักเรียน ครู หรือมหาวิทยาลัย EduConnext มีแพ็กเกจที่ตอบโจทย์ทุกความต้องการ</span>
                        <!-- TOGGLE BUTTON -->
                        <div class="toggle-btn ext-toggle-btn toggle-btn-md mt-30">
                            <span class="toggler-txt">รายเดือน</span>
                            <label class="switch-wrap">
                                <input type="checkbox" id="checbox" @change="togglePrices" />
                                <span class="switcher bg--grey switcher--theme">
                                    <span class="show-annual"></span>
                                    <span class="show-monthly"></span>
                                </span>
                            </label>
                            <span class="toggler-txt">รายปี</span>
                            <!-- Text -->
                            <p class="color--theme">ประหยัดสูงสุด 35% ด้วยการเรียกเก็บเงินรายปี</p>
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
                                <h5 class="s-24 w-700">ฟรี</h5>
                                <!-- Price -->
                                <div class="price">
                                    <sup class="color--black">$</sup>
                                    <span class="color--black">0</span>
                                    <sup class="validity color--grey">&nbsp;/&ensp;ตลอดการใช้งาน</sup>
                                    <p class="color--grey">สำหรับมืออาชีพที่เริ่มต้นจากโปรเจ็กต์ขนาดเล็ก</p>
                                </div>
                                <!-- Button -->
                                <a href="#" class="pt-btn btn r-04 btn--theme hover--theme">เริ่มต้นใช้งาน - ฟรี</a>
                                <p class="p-sm btn-txt text-center color--grey">ไม่มีการเรียกเก็บเงิน</p>
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25">
                                <li>
                                    <p><span class="flaticon-check"></span> สมัครมหาลัย (จำกัด 3 ครั้ง)</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> สร้าง แฟ้มสะสมผลงาน ออนไลน์</p>
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
                                <h5 class="s-24">โปร (โรงเรียน/คุณครู)</h5>
                                <!-- Price -->
                                <div class="price">
                                    <!-- Monthly Price -->
                                    <div class="price2" v-if="showPrice2">
                                        <sup class="color--black">$</sup>
                                        <span class="color--black">16.99</span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;เดือน</sup>
                                    </div>
                                    <!-- Yearly Price -->
                                    <div class="price1" v-if="showPrice1">
                                        <sup class="color--black">$</sup>
                                        <span class="color--black">142.75</span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;ปี</sup>
                                        <!-- Discount Badge -->
                                        <div class="pricing-discount bg--yellow-400 color--black r-36">
                                            <h6 class="s-17">ลด 30%</h6>
                                        </div>
                                    </div>
                                    <!-- Text -->
                                    <p class="color--grey">เหมาะสำหรับการใช้งานส่วนบุคคลหรือทีมขนาดเล็กที่มีเวิร์กโฟลว์ที่เรียบง่าย</p>
                                </div>
                                <!-- End Price -->
                                <!-- Button -->
                                <a href="#" class="pt-btn btn r-04 btn--theme hover--theme">เริ่มทดลองใช้งาน 14 วัน</a>
                                <p class="p-sm btn-txt text-center color--grey">รับประกันคืนเงินภายใน 7 วัน</p>
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25">
                                <li>
                                    <p><span class="flaticon-check"></span>รายงานการวิเคราะห์</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> แดชบอร์ดนักเรียน</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Portfolio Review ไม่จำกัด</p>
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
                                <h5 class="s-24">องค์กร (มหาวิทยาลัย)</h5>
                                <!-- Price -->
                                <div class="price">
                                    <!-- Monthly Price -->
                                    <div class="price2" v-if="showPrice2">
                                        <sup class="color--black">$</sup>
                                        <span class="color--black">24.99</span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;เดือน</sup>
                                    </div>
                                    <!-- Yearly Price -->
                                    <div class="price1" v-if="showPrice1">
                                        <sup class="color--black">$</sup>
                                        <span class="color--black">194.99</span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;ปี</sup>
                                        <!-- Discount Badge -->
                                        <div class="pricing-discount bg--yellow-400 color--black r-36">
                                            <h6 class="s-17">ลด 35%</h6>
                                        </div>
                                    </div>
                                    <!-- Text -->
                                    <p class="color--grey">สำหรับทีมงานที่กำลังเติบโตซึ่งต้องการบริการและความยืดหยุ่นมากขึ้น</p>
                                </div>
                                <!-- End Price -->
                                <!-- Button -->
                                <a href="#" class="pt-btn btn r-04 btn--theme hover--theme">อัพเกรดแผนของคุณ</a>
                                <p class="p-sm btn-txt text-center color--grey">รับประกันคืนเงินภายใน 7 วัน</p>
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25">
                                <li>
                                    <p><span class="flaticon-check"></span> แดชบอร์ดมหาวิทยาลัย</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> ผู้สมัครที่ผ่านการคัดกรองด้วย AI</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> การจัดการแอปพลิเคชันโดยตรง</p>
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
