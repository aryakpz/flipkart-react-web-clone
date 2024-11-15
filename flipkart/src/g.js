

// document.addEventListener('DOMContentLoaded', () => {

//     const moreClick = document.querySelector('.more-click')

//     const moreDrop = document.querySelector('.more-drop')

//     const headerArrow = document.querySelector('.header-arrow')

//     moreDrop.style.display = 'none'

//     fetch('assets/moredrop.json')

//         .then(response => response.json())

//         .then(data => {

//             const moreUl = document.querySelector('.more-ul')

//             moreUl.innerHTML = data.moreItems.map(item => `

//                 <li>

//                     <a class="more-a" href="#"> 

//                         <img src="${item.img}" alt="${item.text}">

//                         <div class="more-text">${item.text}</div>

//                     </a>

//                 </li>

//             `).join('')

//         })

//     moreClick.addEventListener('mouseenter', () => {

//         moreDrop.style.display = 'block'

//         headerArrow.style.transform = 'rotate(-270deg)'

//     })

//     moreClick.addEventListener('mouseleave', () => {

//         moreDrop.style.display = 'none'

//         headerArrow.style.transform = 'rotate(-90deg)'

//     })

//     moreDrop.addEventListener('mouseleave', () => {

//         moreDrop.style.display = 'none'

//         headerArrow.style.transform = 'rotate(-90deg)'

//     })

// })

// ​

// //login-drop

// document.addEventListener('DOMContentLoaded', () => {

//     const loginPart = document.querySelector('.login-part')

//     const loginDrop = document.querySelector('.login-drop')

//     loginDrop.style.display = 'none'

//     fetch('assets/logindrop.json')

//         .then(response => response.json())

//         .then(data => {

//             const loginUl = document.querySelector('.login-ul')

//             loginUl.innerHTML = data.moreItems.map(item => `

//                 <li>

//                     <a class="more-a" href="#"> 

//                         <img src="${item.img}" alt="${item.text}">

//                         <div class="more-text">${item.text}</div>

//                     </a>

//                 </li>

//             `).join('')

//         })

//     loginPart.addEventListener('mouseenter', () => {

//         loginDrop.style.display = 'block'

//     })

//     loginPart.addEventListener('mouseleave', () => {

//         loginDrop.style.display = 'none'

//     })

// })

// ​

// // below-header

// document.addEventListener('DOMContentLoaded', () => {

//     const belowTextItems = document.querySelectorAll('.below-text');

//     const belowHeaderDrop = document.querySelector('.below-header-drop');

// ​

//     fetch('assets/below.json')

//     .then(response => response.json())

//     .then(data => {

//         belowTextItems.forEach(item => {

//             const liElement = item.closest('li')

//             const belowArrow = liElement.querySelector('.below-arrow')

//             liElement.addEventListener('mouseenter', function() {

//                 const text = this.textContent.trim();

//                 belowHeaderDrop.innerHTML = '';

// ​

//                 if (data[text]) {

//                     const sections = data[text].sections;

                    

//                     sections.forEach(section => {

//                         let sectionHTML = `<div class="below-section">

//                             <a class="below-a below-after">${section.title}</a>`;

                        

//                         section.items.forEach(item => {

//                             sectionHTML += `<a class="below-a-all">${item}</a>`;

//                         });

//                         sectionHTML += '</div>';

//                         belowHeaderDrop.innerHTML += sectionHTML;

//                     });

//                     belowHeaderDrop.style.display = 'flex';

//                     belowArrow.style.transform = 'rotate(-270deg)'   

//                 }

//             })

//             liElement.addEventListener('mouseleave', function() {

//                 belowHeaderDrop.style.display = 'none'

//                 belowArrow.style.transform = 'rotate(-90deg)'

//             })

//         });

//     })

//     .catch(error => console.error('Error loading JSON:', error));

// });

// ​

// //different-dropdown

// fetch('assets/different.json')

//     .then(response => response.json())

//     .then(data => {

//         const sectionContainer = document.querySelector('.section-for-diff');

//         sectionContainer.innerHTML = '';

// ​

//         data.categories.forEach(category => {

//             let optionsHTML = '';

// ​

//             if (category.type === 'checkbox') {

//                 category.options.forEach(option => {

//                     optionsHTML += `

//                         <li>

//                             <input type="checkbox" name="${option.id}" id="${option.id}">

//                             <label for="${option.id}">${option.label}</label>

//                         </li>`;

//                 });

//             }

//             let isDefaultOpen = ['DISCOUNTS'].includes(category.label);

//             let categoryHTML = `

//                 <div class="different-part">

//                     <span class="different-text price-text">${category.label}

//                         <img src="images/arrow-below.svg" class="brand-arrow" style="transform: ${isDefaultOpen ? 'rotate(-270deg)' : 'rotate(-90deg)'};">

//                     </span>

//                     <ul class="${category.class}" id="${category.label}" style="display: ${isDefaultOpen ? 'block' : 'none'};">

//                         ${optionsHTML}

//                     </ul>

//                 </div>`;

//             sectionContainer.innerHTML += categoryHTML;

//         });

// ​

//         const allTitles = document.querySelectorAll('.different-text');

//         allTitles.forEach((titleSpan) => {

//             titleSpan.addEventListener('click', () => {

//                 const ul = titleSpan.nextElementSibling;

//                 const arrow = titleSpan.querySelector('.brand-arrow');

//                 if (ul && arrow) {

//                     const isCurrentlyHidden = ul.style.display === 'none';

//                     ul.style.display = isCurrentlyHidden ? 'block' : 'none';

//                     arrow.style.transform = isCurrentlyHidden ? 'rotate(-270deg)' : 'rotate(-90deg)';

//                 }

//             });

//         });

//     })

//     .catch(error => console.error('Error loading JSON:', error));

// ​

// //brand-dropdown

// const categoryPart = document.querySelector('.brand-part')

// const headText = categoryPart.querySelector('.category-text')

// const brandsSection  = categoryPart.querySelector('.brands-section')

// const arrow = categoryPart.querySelector('.brand-arrow')

// ​

// brandsSection.style.display = 'block'

// ​

// headText.addEventListener('click', () => {

//     const ActiveStatus = brandsSection.style.display === 'block'

//     brandsSection.style.display = ActiveStatus ? 'none' : 'block'

//     arrow.style.transform = ActiveStatus ? 'rotate(-90deg)' : 'rotate(-270deg)'

// })

// ​

// //mobile-list(with 9 pages and heading is dynamic) (brand + price + search-brand + sortby )

// let currentPage = 1;

// const phonesPerPage = 9;

// let totalPhones = 0; 

// let totalPages = 0; 

// let mobilePhonesData = []; 

// let filteredPhones = [];

// let selectedMinPrice = 'min'

// let selectedMaxPrice = 'max'

// ​

// let currentSortOption = 'relevance'

// let originalPhonesData = [] 

// ​

// fetch('assets/mobileslist.json')

//     .then(response => response.json())

//     .then(mobilePhones => {

//         mobilePhonesData = mobilePhones; 

//         originalPhonesData = [...mobilePhones]

//         totalPhones = mobilePhones.length; 

//         totalPages = Math.ceil(totalPhones / phonesPerPage);

//         filterPhones()

//         renderPhones();

//         updatePageControls();

//         updateHeading();

//     });

// ​

// function renderPhones() {

//     const bigPartUl = document.querySelector('.big-part-ul');

//     let html = '';

// ​

//     let phonesToRender = filteredPhones.length > 0 ? filteredPhones : mobilePhonesData; // Check filteredPhones first

//     // if (currentSortOption === 'relevance' || currentSortOption === 'newest') {

//     //     phonesToRender = originalPhonesData;

//     // }

//     if(currentSortOption === 'low-to-high') {

//         phonesToRender = phonesToRender.sort((a, b) => {

//             const priceA = parseInt(a.priceAfter.replace('₹', '').replace(',', ''))

//             const priceB = parseInt(b.priceAfter.replace('₹', '').replace(',', ''))

//             return priceA - priceB

//         })

//     }

//     else if(currentSortOption === 'high-to-low') {

//         phonesToRender = phonesToRender.sort((a, b) => {

//             const priceA = parseInt(a.priceAfter.replace('₹', '').replace(',', ''))

//             const priceB = parseInt(b.priceAfter.replace('₹', '').replace(',', ''))

//             return priceB - priceA

//         })

//     }

//     else if(currentSortOption === 'popularity') {

//         phonesToRender = phonesToRender.sort((a, b) => {

//             const rateCountA = parseInt(a.rateCount.replace(/,/g, '').replace(' lakh', '000'));

//             const rateCountB = parseInt(b.rateCount.replace(/,/g, '').replace(' lakh', '000'));

//             return rateCountB - rateCountA;

//         })

//     }

// ​

//       const startIndex = (currentPage - 1) * phonesPerPage;

//       const endIndex = Math.min(startIndex + phonesPerPage, phonesToRender.length);

// ​

    

//       for (let i = startIndex; i < endIndex; i++) {

//         const phone = phonesToRender[i];

//         html += `

//             <li>

//                 <div class="mobile-each">

//                     <div class="mobile-image">

//                         <div class="mobile-pic">

//                             <img src="${phone.image}">

//                         </div>

//                         <div class="to-compare">

//                             <input type="checkbox" id="to-compare-${i}" name="to-compare-${i}">

//                             <label for="to-compare-${i}">Add to Compare</label>

//                         </div>

//                         <div class="wishlist">

//                             <img src="images/widhlist.svg">

//                         </div>

//                     </div>

//                     <div class="mobile-details">

//                         <div class="mobile-details-first">

//                             <span class="mobile-name">${phone.name}</span>

//                             <div class="mobile-rating">

//                                 <span class="rate-star">

//                                     <span>${phone.rating}</span>

//                                     <img src="images/rating-star.svg">

//                                 </span>

//                                 <span class="reviews-number">${phone.reviews}</span>

//                             </div>

//                             <ul class="mobile-features">

//                                 ${phone.features.map(feature => `<li>${feature}</li>`).join('')}

//                             </ul>

//                         </div>

//                         <div class="mobile-price">

//                             <div class="price-part">

//                                 <div class="price-section">

//                                     <span class="after-price">${phone.priceAfter}</span>

//                                     <span class="before-price">

//                                         <span class="original-price">${phone.priceBefore}</span>

//                                         <span class="per-off">${phone.discount}</span>

//                                     </span>

//                                     <span class="free-delivery">${phone.freeDelivery}</span>

//                                 </div>

//                                 <img src="images/assured.png">

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </li>

//         `;

//       }

    

//     bigPartUl.innerHTML = html;

//     updateHeading();

// }

// ​

// function handleSortClick(sortOption) {

