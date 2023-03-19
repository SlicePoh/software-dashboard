

export const lineChartData = [
    [
      { x: "2005", y: 21 },
      { x: "2006", y: 24 },
      { x: "2007", y: 36 },
      { x: "2008", y: 38 },
      { x: "2009", y: 54 },
      { x: "2010", y: 57 },
      { x: "2011", y: 70 },
    ],
    [
      { x: "2005", y: 28 },
      { x: "2006", y: 44 },
      { x: "2007", y: 48 },
      { x: "2008", y: 50 },
      { x: "2009", y: 66 },
      { x: "2010", y: 78 },
      { x: "2011", y: 84 },
    ],
  
    [
      { x: "2005", y: 10 },
      { x: "2006", y: 20 },
      { x: "2007", y: 30 },
      { x: "2008", y: 39 },
      { x: "2009", y: 50 },
      { x: "2010", y: 70 },
      { x: "2011", y: 100 },
    ],
  ];
// export const lineChartData = [
//     [
//       { x: new Date(2005, 0, 1), y: 21 },
//       { x: new Date(2006, 0, 1), y: 24 },
//       { x: new Date(2007, 0, 1), y: 36 },
//       { x: new Date(2008, 0, 1), y: 38 },
//       { x: new Date(2009, 0, 1), y: 54 },
//       { x: new Date(2010, 0, 1), y: 57 },
//       { x: new Date(2011, 0, 1), y: 70 },
//     ],
//     [
//       { x: new Date(2005, 0, 1), y: 28 },
//       { x: new Date(2006, 0, 1), y: 44 },
//       { x: new Date(2007, 0, 1), y: 48 },
//       { x: new Date(2008, 0, 1), y: 50 },
//       { x: new Date(2009, 0, 1), y: 66 },
//       { x: new Date(2010, 0, 1), y: 78 },
//       { x: new Date(2011, 0, 1), y: 84 },
//     ],
  
//     [
//       { x: new Date(2005, 0, 1), y: 10 },
//       { x: new Date(2006, 0, 1), y: 20 },
//       { x: new Date(2007, 0, 1), y: 30 },
//       { x: new Date(2008, 0, 1), y: 39 },
//       { x: new Date(2009, 0, 1), y: 50 },
//       { x: new Date(2010, 0, 1), y: 70 },
//       { x: new Date(2011, 0, 1), y: 100 },
//     ],
//   ];
export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  };
  
  export const LinePrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  export const lineCustomSeries = [
    { dataSource: lineChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Germany',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'England',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[2],
      xName: 'x',
      yName: 'y',
      name: 'India',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
  ];
  export const areaChartData = [
    [
      { x: new Date(2002, 0, 1), y: 2.2 },
      { x: new Date(2003, 0, 1), y: 3.4 },
      { x: new Date(2004, 0, 1), y: 2.8 },
      { x: new Date(2005, 0, 1), y: 1.6 },
      { x: new Date(2006, 0, 1), y: 2.3 },
      { x: new Date(2007, 0, 1), y: 2.5 },
      { x: new Date(2008, 0, 1), y: 2.9 },
      { x: new Date(2009, 0, 1), y: 3.8 },
      { x: new Date(2010, 0, 1), y: 1.4 },
      { x: new Date(2011, 0, 1), y: 3.1 },
    ],
    [
      { x: new Date(2002, 0, 1), y: 2 },
      { x: new Date(2003, 0, 1), y: 1.7 },
      { x: new Date(2004, 0, 1), y: 1.8 },
      { x: new Date(2005, 0, 1), y: 2.1 },
      { x: new Date(2006, 0, 1), y: 2.3 },
      { x: new Date(2007, 0, 1), y: 1.7 },
      { x: new Date(2008, 0, 1), y: 1.5 },
      { x: new Date(2009, 0, 1), y: 2.8 },
      { x: new Date(2010, 0, 1), y: 1.5 },
      { x: new Date(2011, 0, 1), y: 2.3 },
    ],
    [
      { x: new Date(2002, 0, 1), y: 0.8 },
      { x: new Date(2003, 0, 1), y: 1.3 },
      { x: new Date(2004, 0, 1), y: 1.1 },
      { x: new Date(2005, 0, 1), y: 1.6 },
      { x: new Date(2006, 0, 1), y: 2 },
      { x: new Date(2007, 0, 1), y: 1.7 },
      { x: new Date(2008, 0, 1), y: 2.3 },
      { x: new Date(2009, 0, 1), y: 2.7 },
      { x: new Date(2010, 0, 1), y: 1.1 },
      { x: new Date(2011, 0, 1), y: 2.3 },
    ],
  ];
  export const doughChartData = [
    {x: "Coding Competition",entries: 351124},
    {x: "Projects",entries: 127980},
    {x: "Others",entries: 28213},
  ];
  export const dough2ChartData = [
    {x: "1",y: 46},
    {x: "2",y: 54},
  ];