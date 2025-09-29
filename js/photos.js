(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto("id-"+id, url);
lazyload();
})(`
<li class="item " id="id-share-20250811-3761" style="background-image: url('/photos/tint/share_20250811_3761-65ba1d.jpg')" title="share_20250811_3761">
  <img class="lazyload" data-src="/photos/thumbnail/share_20250811_3761-3c1786.jpg" src="/photos/tint/share_20250811_3761-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20250811_3761-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20250811-3761" data-target="id-share-20250811-3761">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20250811-3369" data-target="id-share-20250811-3369" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/1300</li>
        <li><span class="aperture"><em>f</em>/</span>1.8</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20250811-3369" style="background-image: url('/photos/tint/share_20250811_3369-65ba1d.jpg')" title="share_20250811_3369">
  <img class="lazyload" data-src="/photos/thumbnail/share_20250811_3369-3c1786.jpg" src="/photos/tint/share_20250811_3369-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20250811_3369-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20250811-3369" data-target="id-share-20250811-3369">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20250811-3761" data-target="id-share-20250811-3761" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20250811-2836" data-target="id-share-20250811-2836" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/1500</li>
        <li><span class="aperture"><em>f</em>/</span>1.8</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20250811-2836" style="background-image: url('/photos/tint/share_20250811_2836-65ba1d.jpg')" title="share_20250811_2836">
  <img class="lazyload" data-src="/photos/thumbnail/share_20250811_2836-3c1786.jpg" src="/photos/tint/share_20250811_2836-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20250811_2836-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20250811-2836" data-target="id-share-20250811-2836">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20250811-3369" data-target="id-share-20250811-3369" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20250811-1715" data-target="id-share-20250811-1715" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/750</li>
        <li><span class="aperture"><em>f</em>/</span>2.0</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20250811-1715" style="background-image: url('/photos/tint/share_20250811_1715-65ba1d.jpg')" title="share_20250811_1715">
  <img class="lazyload" data-src="/photos/thumbnail/share_20250811_1715-3c1786.jpg" src="/photos/tint/share_20250811_1715-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20250811_1715-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20250811-1715" data-target="id-share-20250811-1715">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20250811-2836" data-target="id-share-20250811-2836" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20250811-0862" data-target="id-share-20250811-0862" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/300</li>
        <li><span class="aperture"><em>f</em>/</span>1.8</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20250811-0862" style="background-image: url('/photos/tint/share_20250811_0862-65ba1d.jpg')" title="share_20250811_0862">
  <img class="lazyload" data-src="/photos/thumbnail/share_20250811_0862-3c1786.jpg" src="/photos/tint/share_20250811_0862-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20250811_0862-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20250811-0862" data-target="id-share-20250811-0862">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20250811-1715" data-target="id-share-20250811-1715" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20250629-0021" data-target="id-share-20250629-0021" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/2000</li>
        <li><span class="aperture"><em>f</em>/</span>1.8</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20250629-0021" style="background-image: url('/photos/tint/share_20250629_0021-65ba1d.jpg')" title="share_20250629_0021">
  <img class="lazyload" data-src="/photos/thumbnail/share_20250629_0021-3c1786.jpg" src="/photos/tint/share_20250629_0021-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20250629_0021-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20250629-0021" data-target="id-share-20250629-0021">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20250811-0862" data-target="id-share-20250811-0862" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-dscf7365" data-target="id-share-dscf7365" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-E3</li>
        <li>1/1700</li>
        <li><span class="aperture"><em>f</em>/</span>3.6</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-dscf7365" style="background-image: url('/photos/tint/share_DSCF7365-65ba1d.jpg')" title="share_DSCF7365">
  <img class="lazyload" data-src="/photos/thumbnail/share_DSCF7365-3c1786.jpg" src="/photos/tint/share_DSCF7365-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_DSCF7365-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-dscf7365" data-target="id-share-dscf7365">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20250629-0021" data-target="id-share-20250629-0021" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-dscf7206" data-target="id-share-dscf7206" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/180</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-dscf7206" style="background-image: url('/photos/tint/share_DSCF7206-65ba1d.jpg')" title="share_DSCF7206">
  <img class="lazyload" data-src="/photos/thumbnail/share_DSCF7206-3c1786.jpg" src="/photos/tint/share_DSCF7206-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_DSCF7206-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-dscf7206" data-target="id-share-dscf7206">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-dscf7365" data-target="id-share-dscf7365" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20250616-1179" data-target="id-share-20250616-1179" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/100</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20250616-1179" style="background-image: url('/photos/tint/share_20250616_1179-65ba1d.jpg')" title="share_20250616_1179">
  <img class="lazyload" data-src="/photos/thumbnail/share_20250616_1179-3c1786.jpg" src="/photos/tint/share_20250616_1179-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20250616_1179-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20250616-1179" data-target="id-share-20250616-1179">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-dscf7206" data-target="id-share-dscf7206" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20250616-1117" data-target="id-share-20250616-1117" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/52</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20250616-1117" style="background-image: url('/photos/tint/share_20250616_1117-65ba1d.jpg')" title="share_20250616_1117">
  <img class="lazyload" data-src="/photos/thumbnail/share_20250616_1117-3c1786.jpg" src="/photos/tint/share_20250616_1117-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20250616_1117-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20250616-1117" data-target="id-share-20250616-1117">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20250616-1179" data-target="id-share-20250616-1179" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20241125-0377" data-target="id-share-20241125-0377" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/480</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20241125-0377" style="background-image: url('/photos/tint/share_20241125_0377-65ba1d.jpg')" title="share_20241125_0377">
  <img class="lazyload" data-src="/photos/thumbnail/share_20241125_0377-3c1786.jpg" src="/photos/tint/share_20241125_0377-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20241125_0377-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20241125-0377" data-target="id-share-20241125-0377">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20250616-1117" data-target="id-share-20250616-1117" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20241123-0008" data-target="id-share-20241123-0008" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>NIKON D500</li>
        <li>1/200</li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20241123-0008" style="background-image: url('/photos/tint/share_20241123_0008-65ba1d.jpg')" title="share_20241123_0008">
  <img class="lazyload" data-src="/photos/thumbnail/share_20241123_0008-3c1786.jpg" src="/photos/tint/share_20241123_0008-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20241123_0008-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20241123-0008" data-target="id-share-20241123-0008">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20241125-0377" data-target="id-share-20241125-0377" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20241122-0211" data-target="id-share-20241122-0211" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-E3</li>
        <li>1/75</li>
        <li><span class="aperture"><em>f</em>/</span>2.0</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20241122-0211" style="background-image: url('/photos/tint/share_20241122_0211-65ba1d.jpg')" title="share_20241122_0211">
  <img class="lazyload" data-src="/photos/thumbnail/share_20241122_0211-3c1786.jpg" src="/photos/tint/share_20241122_0211-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20241122_0211-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20241122-0211" data-target="id-share-20241122-0211">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20241123-0008" data-target="id-share-20241123-0008" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20241121-0362" data-target="id-share-20241121-0362" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-E3</li>
        <li>1/17</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20241121-0362" style="background-image: url('/photos/tint/share_20241121_0362-65ba1d.jpg')" title="share_20241121_0362">
  <img class="lazyload" data-src="/photos/thumbnail/share_20241121_0362-3c1786.jpg" src="/photos/tint/share_20241121_0362-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20241121_0362-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20241121-0362" data-target="id-share-20241121-0362">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20241122-0211" data-target="id-share-20241122-0211" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20241116-0377" data-target="id-share-20241116-0377" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-E3</li>
        <li>1/38</li>
        <li><span class="aperture"><em>f</em>/</span>2.2</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20241116-0377" style="background-image: url('/photos/tint/share_20241116_0377-65ba1d.jpg')" title="share_20241116_0377">
  <img class="lazyload" data-src="/photos/thumbnail/share_20241116_0377-3c1786.jpg" src="/photos/tint/share_20241116_0377-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20241116_0377-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20241116-0377" data-target="id-share-20241116-0377">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20241121-0362" data-target="id-share-20241121-0362" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20241020-0408" data-target="id-share-20241020-0408" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-E3</li>
        <li>1/150</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20241020-0408" style="background-image: url('/photos/tint/share_20241020_0408-65ba1d.jpg')" title="share_20241020_0408">
  <img class="lazyload" data-src="/photos/thumbnail/share_20241020_0408-3c1786.jpg" src="/photos/tint/share_20241020_0408-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20241020_0408-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20241020-0408" data-target="id-share-20241020-0408">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20241116-0377" data-target="id-share-20241116-0377" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20241020-0199" data-target="id-share-20241020-0199" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-E3</li>
        <li>1/28</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20241020-0199" style="background-image: url('/photos/tint/share_20241020_0199-65ba1d.jpg')" title="share_20241020_0199">
  <img class="lazyload" data-src="/photos/thumbnail/share_20241020_0199-3c1786.jpg" src="/photos/tint/share_20241020_0199-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20241020_0199-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20241020-0199" data-target="id-share-20241020-0199">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20241020-0408" data-target="id-share-20241020-0408" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20240915-0487" data-target="id-share-20240915-0487" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-E3</li>
        <li>1</li>
        <li><span class="aperture"><em>f</em>/</span>10.9</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20240915-0487" style="background-image: url('/photos/tint/share_20240915_0487-65ba1d.jpg')" title="share_20240915_0487">
  <img class="lazyload" data-src="/photos/thumbnail/share_20240915_0487-3c1786.jpg" src="/photos/tint/share_20240915_0487-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20240915_0487-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20240915-0487" data-target="id-share-20240915-0487">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20241020-0199" data-target="id-share-20241020-0199" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20240905-0053" data-target="id-share-20240905-0053" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/4400</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20240905-0053" style="background-image: url('/photos/tint/share_20240905_0053-65ba1d.jpg')" title="share_20240905_0053">
  <img class="lazyload" data-src="/photos/thumbnail/share_20240905_0053-3c1786.jpg" src="/photos/tint/share_20240905_0053-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20240905_0053-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20240905-0053" data-target="id-share-20240905-0053">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20240915-0487" data-target="id-share-20240915-0487" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20240901-0147" data-target="id-share-20240901-0147" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/550</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20240901-0147" style="background-image: url('/photos/tint/share_20240901_0147-65ba1d.jpg')" title="share_20240901_0147">
  <img class="lazyload" data-src="/photos/thumbnail/share_20240901_0147-3c1786.jpg" src="/photos/tint/share_20240901_0147-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20240901_0147-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20240901-0147" data-target="id-share-20240901-0147">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20240905-0053" data-target="id-share-20240905-0053" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20240901-0087" data-target="id-share-20240901-0087" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/150</li>
        <li><span class="aperture"><em>f</em>/</span>2.0</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20240901-0087" style="background-image: url('/photos/tint/share_20240901_0087-65ba1d.jpg')" title="share_20240901_0087">
  <img class="lazyload" data-src="/photos/thumbnail/share_20240901_0087-3c1786.jpg" src="/photos/tint/share_20240901_0087-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20240901_0087-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20240901-0087" data-target="id-share-20240901-0087">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20240901-0147" data-target="id-share-20240901-0147" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20240829-0521" data-target="id-share-20240829-0521" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/550</li>
        <li><span class="aperture"><em>f</em>/</span>5.7</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20240829-0521" style="background-image: url('/photos/tint/share_20240829_0521-65ba1d.jpg')" title="share_20240829_0521">
  <img class="lazyload" data-src="/photos/thumbnail/share_20240829_0521-3c1786.jpg" src="/photos/tint/share_20240829_0521-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20240829_0521-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20240829-0521" data-target="id-share-20240829-0521">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20240901-0087" data-target="id-share-20240901-0087" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20240829-0497" data-target="id-share-20240829-0497" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/10</li>
        <li><span class="aperture"><em>f</em>/</span>4.0</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20240829-0497" style="background-image: url('/photos/tint/share_20240829_0497-65ba1d.jpg')" title="share_20240829_0497">
  <img class="lazyload" data-src="/photos/thumbnail/share_20240829_0497-3c1786.jpg" src="/photos/tint/share_20240829_0497-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20240829_0497-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20240829-0497" data-target="id-share-20240829-0497">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20240829-0521" data-target="id-share-20240829-0521" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20240829-0456" data-target="id-share-20240829-0456" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/850</li>
        <li><span class="aperture"><em>f</em>/</span>2.0</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20240829-0456" style="background-image: url('/photos/tint/share_20240829_0456-65ba1d.jpg')" title="share_20240829_0456">
  <img class="lazyload" data-src="/photos/thumbnail/share_20240829_0456-3c1786.jpg" src="/photos/tint/share_20240829_0456-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20240829_0456-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20240829-0456" data-target="id-share-20240829-0456">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20240829-0497" data-target="id-share-20240829-0497" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/share-20240829-0164" data-target="id-share-20240829-0164" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/2500</li>
        <li><span class="aperture"><em>f</em>/</span>2.0</li>
        -->
  </ul>
</li>
<li class="item " id="id-share-20240829-0164" style="background-image: url('/photos/tint/share_20240829_0164-65ba1d.jpg')" title="share_20240829_0164">
  <img class="lazyload" data-src="/photos/thumbnail/share_20240829_0164-3c1786.jpg" src="/photos/tint/share_20240829_0164-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/share_20240829_0164-686656.jpg')"></span>
  </span>
  <a class="open" href="/share-20240829-0164" data-target="id-share-20240829-0164">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20240829-0456" data-target="id-share-20240829-0456" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20240705-0053" data-target="id-20240705-0053" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>X-T5</li>
        <li>1/1800</li>
        <li><span class="aperture"><em>f</em>/</span>2.0</li>
        -->
  </ul>
</li>
<li class="item " id="id-20240705-0053" style="background-image: url('/photos/tint/20240705_0053-65ba1d.jpg')" title="20240705_0053">
  <img class="lazyload" data-src="/photos/thumbnail/20240705_0053-3c1786.jpg" src="/photos/tint/20240705_0053-65ba1d.jpg" height="" width="" />
  <span class="full">
    <span style="background-image: url('/photos/large/20240705_0053-686656.jpg')"></span>
  </span>
  <a class="open" href="/20240705-0053" data-target="id-20240705-0053">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/share-20240829-0164" data-target="id-share-20240829-0164" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <ul class="links top photodetail-links">
  </ul>
  <ul class="meta">
    <!--
        <li>NIKON D500</li>
        <li>1/1000</li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
  </ul>
</li>
`);