import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  selectedExample = 'ng-jsf-flex-layout';
  selectedExampleName = 'Flexbox layout';
  selectedFramework = 'material-design';
  visible = {
    options: true,
    schema: true,
    form: true,
    output: true
  };
  
  formActive = false;
  jsonFormSchema: string;
  jsonFormStatusMessage = 'Loading form...';
  jsonFormObject: any;
  submittedFormData: any = null;
  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.loadSelectedExample();
  }

  onSubmit(data: any) {
    this.submittedFormData = data;
    console.log('hello',this.submittedFormData)
  }

  get prettySubmittedFormData() {
    return JSON.stringify(this.submittedFormData, null, 2);
  }

  loadSelectedExample() {
    const exampleURL = `assets/example-schemas/${this.selectedExample}.json`;
    this.http
      .get(exampleURL, { responseType: 'text' })
      .subscribe(schema => {
        this.jsonFormSchema = schema;
        this.generateForm(this.jsonFormSchema);
      });
  }
  
  generateForm(newFormString: string) {
    if (!newFormString) { return; }
    this.formActive = false;
    try {
      this.jsonFormObject = JSON.parse(newFormString);
    } catch (jsonError) {
      try {
        const newFormObject: any = null;
        eval('newFormObject = ' + newFormString);
        this.jsonFormObject = newFormObject;
      } catch (javascriptError) {
        this.jsonFormStatusMessage =  jsonError;
        return;
      }
    }
    this.formActive = true;
  }
}
