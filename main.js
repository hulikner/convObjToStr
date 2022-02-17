const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const compHTML = (computer) => {
    const compHTMLSection = `<section id="computer--${computer.id}">
	 <h1>${computer.manufacturer} ${computer.make}</h1>
	 <div>Model: ${computer.model}</div>
	 <div>Memory: ${computer.specs.memory}</div>
	 <div>Hard drive space: ${computer.specs.hardDrive}</div>
	 <div>Processor speed: ${computer.specs.processor} Ghz</div>
</section>`
return compHTMLSection
}

const returnedCompHTML = compHTML(computer)

console.log(returnedCompHTML)