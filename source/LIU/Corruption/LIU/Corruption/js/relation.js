function connection(){
		
	  var cy = cytoscape({
	  container: document.getElementById('cy'),
	  elements: {
		nodes: [{
		  data: {
			id: 'DS001',
			title: 'DS: 輸入項目設定'
		  },
		}, {
		  data: {
			id: 'DS002',
			title: 'DS: 子公司營運管理詳細月資料'
		  }
		}, {
		  data: {
			id: 'DS003',
			title: 'DS: 目標執行情形項目列表'
		  }
		}, {
		  data: {
			id: 'DS004',
			title: 'DS: Country Currency Mapping'
		  }
		}, {
		  data: {
			id: 'CV001',
			title: '[PR000] 輸入項目設定'
		  }
		}, {
		  data: {
			id: 'CV002',
			title: '[PR001] 業務別收入分析'
		  }
		}, {
		  data: {
			id: 'CV003',
			title: '[CAL000] 報表月份'
		  }
		}, {
		  data: {
			id: 'CV004',
			title: '[CAL005]國家列表'
		  }
		}, {
		  data: {
			id: 'CV005',
			title: '[CAL001] 報表月份顯示表'
		  }
		}],
		edges: [{
		  data: {
			id: '1',
			source: 'DS001',
			target: 'CV001'
		  }
		}, {
		  data: {
			id: '2',
			source: 'DS002',
			target: 'CV001'
		  }
		}, {
		  data: {
			id: '3',
			source: 'CV001',
			target: 'CV002'
		  }
		}, {
		  data: {
			id: '4',
			source: 'CV002',
			target: 'CV003'
		  }
		}, {
		  data: {
			id: '5',
			source: 'DS004',
			target: 'CV003'
		  }
		}, {
		  data: {
			id: '6',
			source: 'DS003',
			target: 'CV004'
		  }
		}, {
		  data: {
			id: '7',
			source: 'CV004',
			target: 'CV005'
		  }
		}, {
		  data: {
			id: '8',
			source: 'CV003',
			target: 'CV005'
		  }
		}]
	  },
	  layout: {
		name: "dagre"
	  },
	  style: [{
		selector: 'node',
		style: {
		  'label': 'data(title)',
		  'width': '100%',
		  'font-size': '7px',
		  'text-valign': 'center',
		  'shape': 'rectangle',
		  'background-color': 'rgba(113,158,252,1)'
		}
	  }, {
		selector: 'edge',
		style: {
		  'width': 2,
		  'line-color': '#ccc',
		  'target-arrow-color': '#ccc',
		  'target-arrow-shape': 'triangle'
		}
	  }]
	});
	cy.resize();
	
//

var interval = setTimeout(
			function(){
				//alert($('#myCarousel').hasClass('in'));
				cy.resize();
			}, 1000);

}
