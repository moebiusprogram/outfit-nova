<template>
  <div id="profile-summary-wrapper" style="display:flex; width: 100px;">
    <div>
      <svg width="50" height="40" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9627 34C11.7466 33.998 10.5524 33.6842 9.49913 33.0897C8.4459 32.4953 7.5706 31.6411 6.96063 30.6124L0.924931 20.3881C0.318922 19.3574 0 18.1894 0 17.0005C0 15.8117 0.318922 14.6436 0.924931 13.6129L6.96168 3.38963C7.5713 2.36073 8.44632 1.50621 9.49936 0.911406C10.5524 0.316606 11.7466 0.00234295 12.9627 0H25.0362C26.2524 0.00174818 27.4467 0.315529 28.5 0.909988C29.5532 1.50445 30.4285 2.35877 31.0383 3.38758L37.0751 13.6109C37.6811 14.6415 38 15.8096 38 16.9985C38 18.1873 37.6811 19.3554 37.0751 20.386L31.0383 30.6093C30.4285 31.6382 29.5532 32.4925 28.5 33.0869C27.4467 33.6814 26.2524 33.9952 25.0362 33.9969L12.9627 34Z" fill="url(#paint0_linear_1854_31)"/>
        <defs>
          <linearGradient id="paint0_linear_1854_31" x1="19" y1="0" x2="19" y2="34" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4F13B6"/>
            <stop offset="1" stop-color="#4CD0FE"/>
          </linearGradient>
        </defs>
        <svg width="45" height="40" viewbox="-20 -1 45 40"  class="profile-svg">
          <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width="60" height="50">
              <image href="../assets/person-1.png" x="2" y="0" width="34" height="34" />
            </pattern>
          </defs>
          <path fill=url(#img1)
                  d="M2.0000000000000004 20.784609690826525Q0 17.32050807568877 2.0000000000000004 13.856406460551018L8 3.4641016151377544Q10 0 14 0L26 0Q30 0 32 3.4641016151377544L38 13.856406460551018Q40 17.32050807568877 38 20.784609690826525L32 31.17691453623979Q30 34.64101615137754 26 34.64101615137754L14 34.64101615137754Q10 34.64101615137754 8 31.17691453623979Z"
                  />
        </svg>
      </svg>
    </div>
    <div>
      <p style="font-size:10px;color: #A2ADB6;" class="profile-info-1">06/02/2021</p>
      <p style="font-size:10px; font-weight:700;" class="profile-info-2">yasmins06</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ProfileSummary'
}
</script>
