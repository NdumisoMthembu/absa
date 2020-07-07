var prevElemnt = undefined;

function switchTab(name, element) {
    var titleTag = document.getElementById('tittleTags');
    titleTag.innerHTML = `Book Your ${name}`;
    console.log(element);
    element.style.background = "#AC4147";
    if (prevElemnt) {

        prevElemnt.style.background = "#4F4B5C";
    }
    prevElemnt = element;


    var form = document.getElementById('form');
    console.log(element);
    var input = document.createElement('input');
    input.type = "text";
    // form.appendChild(input);
    form.innerHTML = `Loading ${name}'s form....`;
    if (name === 'flights') {
        form.innerHTML = getFlightsForm();
    }
    if (name === 'hotels') {
        form.innerHTML = getHotelsForm();
    }

}


function switchMainTab(name, element) {
    var titleTag = document.getElementById('tittleTags');
    titleTag.innerHTML = `Book Your ${name}`;
    console.log(element);
 
    prevElemnt = element;


    var form = document.getElementById('form');
    console.log(element);
    var input = document.createElement('input');
    input.type = "text";
    // form.appendChild(input);
    form.innerHTML = `Loading ${name}'s form....`;
    if (name === 'flights') {
        form.innerHTML = getFlightsForm();
    }
    if (name === 'hotels') {
        form.innerHTML = getHotelsForm();
    }

}

function getFlightsForm() {
    return `
    <div class="grid">
    <div class="form-item">
        <div class="label">From</div>
        <div class="input">
            <input type="text" placeholder="e.g OR Thambo" name="from" id="from">
        </div>
    </div>

    <div class="form-item">
        <div class="label">To</div>
        <div class="input">
            <input type="text" placeholder="e.g King Shaka" name="to" id="to">
        </div>
    </div>
</div>
<div class="grid grid-3-cols">
    <div class="form-item">
        <div class="label">departure</div>
        <div class="input">
            <input type="date" name="departure" id="departure">
        </div>
    </div>

    <div class="form-item">
        <div class="label">return</div>
        <div class="input">
            <input type="date" name="return" id="return">
        </div>
    </div>

    <div class="form-item">
        <div class="label">adults</div>
        <div class="input">
            <input type="number" name="adults" id="adults">
        </div>
    </div>
</div>

<div class="grid">
    <button type="submit">search flights</button>
    <button type="button" class="link">advanced search</button>
</div>
    
    `;
}

function getHotelsForm() {
    return `
    <div class="grid  grid-4-cols">
    <div class="form-item">
        <div class="label">From</div>
        <div class="input">
            <input type="text" placeholder="Where are you going" name="from" id="from">
        </div>
    </div>

    <div class="form-item">
        <div class="label">Checkin date</div>
        <div class="input">
            <input type="text" placeholder="Checkin date" name="to" id="to">
        </div>
    </div>

    <div class="form-item">
    <div class="label">Checkout date</div>
    <div class="input">
        <input type="text" placeholder="Checkout date" name="to" id="to">
    </div>
</div>

    <div class="form-item">
    <div class="label">Ulduts</div>
    <div class="input">
        <input type="number" value="1" name="to" id="to">
    </div>
</div>
</div>


<div class="grid">
    <button type="submit">search hotels</button>
    <button type="button" class="link">advanced search</button>
</div>
    
    `;
}