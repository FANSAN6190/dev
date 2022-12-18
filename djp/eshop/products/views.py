from django.shortcuts import render

# Create your views here.
def first(request):
    return render(request,'index.html')
def two(request):
    return render(request,'form.html')
def three(request):
    return render(request,'JWST.html')

