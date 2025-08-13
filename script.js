const accordionCon = document.querySelector('.faq_boxes');
console.log(accordionCon);


accordionCon.addEventListener('click', (e) => {
	const accordionBtn = e.target.closest('button');
	const accordionId = accordionBtn.id;
	const accordionContent = document.querySelector('#' + accordionId + '-content');
	
	console.log(accordionContent);

	if (accordionContent.classList.contains('hidden')) {
		accordionContent.classList.remove('hidden');
	} else {
		accordionContent.classList.add('hidden');
	}
});