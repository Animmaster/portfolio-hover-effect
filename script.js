const projects = gsap.utils.toArray('.project')
const thumbnails = gsap.utils.toArray('.thumbnail')
const projectThumbnail = document.querySelector('.project-thumbnail')
const projectsContainer = document.querySelector('.projects')

gsap.set(projectThumbnail, { scale: 0, xPercent: -50, yPercent: -50 })

const xTo = gsap.quickTo(projectThumbnail, 'x', {
	duration: 0.4,
	ease: 'power3.out',
})
const yTo = gsap.quickTo(projectThumbnail, 'y', {
	duration: 0.4,
	ease: 'power3.out',
})

projectsContainer.addEventListener('mousemove', e => {
	xTo(e.clientX)
	yTo(e.clientY)
})

projectsContainer.addEventListener('mouseleave', () => {
	gsap.to(projectThumbnail, {
		scale: 0,
		duration: 0.3,
		ease: 'power2.out',
		overwrite: 'auto',
	})
})

projects.forEach((project, index) => {
	project.addEventListener('mouseenter', () => {
		gsap.to(projectThumbnail, {
			scale: 1,
			duration: 0.4,
			ease: 'power2.out',
			overwrite: 'auto',
		})

		gsap.to(thumbnails, {
			yPercent: -100 * index,
			duration: 0.4,
			ease: 'power2.out',
			overwrite: 'auto',
		})
	})
})
