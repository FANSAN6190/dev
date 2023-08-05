from typing import Dict
from django.shortcuts import render
import csv
# Create your views here.
def details(request):
    return render(request,'htm2.html')
def cusdata(request):
    if request.method=='POST':
        dict1=request.POST
        with open('cusdata.csv','w') as csvfile:
            wrt=csv.writer(csvfile)
            for key,value in dict1.items():
                wrt.writerow([key,value])   
    return render(request,'form.html')
