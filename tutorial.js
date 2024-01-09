function waitFor(millis) {
  return new Promise(function(resolve) {
    setTimeout( function () { resolve(); }, millis);
  });
}

var tour;
var StepToWait3;

function initTour() {
  tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'shadow-md bg-purple-dark',
      scrollTo: false,
      popperOptions: {
        modifiers: [{ name: 'offset', options: { offset: [20, 20] } }]
        }
    }
  });
  tour.addStep({
    id: 'step-home',
    text: 'Welcome to Sparnatural tutorial. We will guide you to write your first query.',
    classes: 'example-step-extra-class',
    buttons: [
      {
        text: 'Start !',
        action: tour.next
      }
    ]
  });
  tour.addStep({
    id: 'step-0',
    text: 'This line is a query criteria and will allow you to express what you are looking for, like a sentence.',
    attachTo: {
      element: 'spar-natural .CriteriaGroup',
      on: 'bottom'
    },
    canClickTarget: false,
    classes: 'example-step-extra-class',
    buttons: [
      {
      text: 'Next >',
      action: tour.next
      }
    ]
  });
  tour.addStep({
    id: 'step--1',
    text: '<p>The first step is to choose what you are looking for in this list.</p><p>Let\'s imagine we are looking for <em>cultural objects from a known data provider organization</em>.</p>',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.StartClassGroup ul.list',
      on: 'right'
    },
    classes: 'example-step-extra-class',
    canClickTarget: false,
    buttons: [
      {
      text: 'Next >',
      action: tour.next
      }
    ]
  });
  tour.addStep({
    id: 'step--2',
    text: 'What you are looking for are Cultural objects. Select "Cultural object" from the list.',
    attachTo: {
      element: 'li[data-value="http://www.europeana.eu/schemas/edm/ProvidedCHO"]',
      on: 'right'
    },
    advanceOn: {
      selector: '.StartClassGroup li[data-value="http://www.europeana.eu/schemas/edm/ProvidedCHO"]',
      event: 'click'
    },
    classes: 'example-step-extra-class',
  });

  tour.addStep({
    id: 'step--3',
    text: 'Then you need to select the kind of thing the Cultural object is connected to, from this list.',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.EndClassGroup ul.list',
      on: 'right'
    },
    classes: 'example-step-extra-class',
    canClickTarget: false,
    buttons: [
      {
      text: 'Next >',
      action: tour.next
      }
    ],
    beforeShowPromise: function() {
      return waitFor(300) ;
    }
  });

  tour.addStep({
    id: 'step--4',
    text: 'As you are interested in <em>data providers oranisation</em>, you are looking for a connection between the Cultural object and an Organization. Click on Organization/Agent.',
    attachTo: {
      element: '.EndClassGroup li[data-value="http://www.europeana.eu/schemas/edm/Agent"]',
      on: 'right'
    },
    advanceOn: {
      selector: '.EndClassGroup li[data-value="http://www.europeana.eu/schemas/edm/Agent"]',
      event: 'click'
    },
    classes: 'example-step-extra-class',
  });


  tour.addStep({
    id: 'step--5',
    text: 'The next step is to indicate <em>how</em> the Cultural object is related to the Organization, by selecting from this list. (Sometimes there is only one possible choice, it will be selected automatically).',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.ObjectPropertyGroup ul.list',
      on: 'bottom'
    },
    classes: 'example-step-extra-class',
    canClickTarget: false,
    buttons: [
      {
      text: 'Next >',
      action: tour.next
      }
    ],
    beforeShowPromise: function() {
      return waitFor(300) ;
    }
  });

  tour.addStep({
    id: 'step--6',
    text: 'As you are interested in <em>data providers</em>, select <em>data provider</em> from the list.',
    attachTo: {
      element: '.ObjectPropertyGroup li[data-value="http://www.europeana.eu/schemas/edm/dataProvider"]',
      on: 'right'
    },
    advanceOn: {
      selector: '.ObjectPropertyGroup li[data-value="http://www.europeana.eu/schemas/edm/dataProvider"]',
      event: 'click'
    },
    classes: 'example-step-extra-class',
  });

  /*
  tour.addStep({
    id: 'step--7',
    text: 'And then you will be able to indicate that the Country you are interested in is <em>Italy</em>',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.EndClassGroup>.EditComponents>.ObjectPropertyTypeWidget',
      on: 'left'
    },
    classes: 'example-step-extra-class',
    canClickTarget: false,
    buttons: [
      {
      text: 'Next >',
      action: tour.next()
      }
    ],
    beforeShowPromise: function() {
      return waitFor(300) ;
    }
  });
  */

  tour.addStep({
    id: 'step--7',
    text: 'And then you will be able to indicate the Organisation you are interested in. Click to unfold the list.',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.EndClassGroup>.EditComponents>.WidgetWrapper>.list-widget',
      on: 'left'
    },
    classes: 'example-step-extra-class',
    canClickTarget: true,
    advanceOn: {
      selector: 'spar-natural .CriteriaGroup>.EndClassGroup>.EditComponents>.WidgetWrapper>.list-widget',
      event: 'click'
    },
    beforeShowPromise: function() {
      return waitFor(1000) ;
    }
  });

  StepToWait3 = tour.addStep({
    id: 'step--8',
    text: 'Then search or select the organization you would like to select in the list (the actual content of the list depends on the datasets you previously seleted).',
    attachTo: {
      // element: 'spar-natural .CriteriaGroup>.EndClassGroup>.EditComponents>.ObjectPropertyTypeWidget .list-widget',
      element: '.select2-dropdown',
      on: 'left'
    },
    classes: 'example-step-extra-class',
    canClickTarget: true,
    beforeShowPromise: function() {
      return waitFor(300) ;
    }
  });

  tour.addStep({
    id: 'step--9',
    text: 'You have written your first criteria to search for <em>Cultural object with a known data provider</em> ! Now you need to execute the query.',
    attachTo: {
      element: 'spar-natural .CriteriaGroup',
      on: 'bottom'
    },
    classes: 'example-step-extra-class',
    buttons: [
      {
      text: 'Next >',
      action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'step--10',
    text: 'Click here to execute the query. This will successfully conclude this tutorial. Congratulations ! <br /><br /> After this you can <em>add more criterias</em> to your query by hovering on "Cultural object" and clicking on "And" to add a new line.',
    attachTo: {
      element: '.submitSection a',
      on: 'left'
    },
    classes: 'example-step-extra-class',
    advanceOn: {
      selector: '.submitSection a',
      event: 'click'
    },
    beforeShowPromise: function() {
      return waitFor(300) ;
    }
  });

  tour.start();
}