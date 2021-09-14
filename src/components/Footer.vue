<template>
	<footer class="footer-1 contact-sec" :class="{ 'footer-2' : addClass }">
		 	<div class="container" v-show="addPerk">
                <div class="columns pt-6 pb-3">
                    <div class="column is-12 has-text-centered">
                        <img src="@/assets/images/parks-and-rec-logo.png" alt="">
                    </div>
                </div>
            </div>
            <div :class="{ 'footer-color' : addClass }">
	            <div class="container">
	                <div class="columns ">
	                    <div class="column is-4 px-6">
	                        <div class="border-right">
	                            <h4>Address</h4>
	                            <p>1501 John F.Kennedy Blvd. <br> Philadelphia, PA 19102</p>
	                            <a href="">Map <i class="fa fa-external-link" aria-hidden="true"></i></a>
	                        </div>
	                    </div>
	                    <div class="column is-4 px-6">
	                        <div class=" border-right">
	                            <h4>Hours</h4>
	                            <p>Closed today</p>
	                            <br>
	                            <a href="">See all hours</a>
	                        </div>
	                    </div>
	                    <div class="column is-4 px-6">
	                            <h4>Contact</h4>
	                            <a href="mailto:parksandrecreation@phila.gov">parksandrecreation@phila.gov</a>
	                            <a href="tel:(215)683-3600;">(215)683-3600</a>
	                            <ul class="is-flex social-menu">
	                                <li>
	                                    <a class="is-facebook is-inverted">
	                                        <span class="icon">
	                                            <i class="fa fa-facebook"></i>
	                                        </span>
	                                    </a>
	                                </li>
	                                <li>
	                                    <a class="is-twitter is-inverted">
	                                        <span class="icon">
	                                            <i class="fa fa-twitter"></i>
	                                        </span>
	                                    </a>
	                                </li>
	                                <li>
	                                    <a class="is-instagram is-inverted">
	                                        <span class="icon">
	                                            <i class="fa fa-instagram"></i>
	                                        </span>
	                                    </a>
	                                </li>
	                            </ul>
	                        </div>
	                </div>
	            </div>
        	</div>
        </footer>
</template>
<script>
	export default {
		props:["addPerk","addClass"]

	}
</script>