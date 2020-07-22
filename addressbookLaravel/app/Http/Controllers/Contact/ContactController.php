<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Repositories\Contact\ContactInterface;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{

    protected $contactRepo;

    public function __construct(ContactInterface $contact)
    {
        $this->contactRepo = $contact;
    }

    public function index()
    {
        return $this->contactRepo->getAll();
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {


        $this->contactRepo->create($request->all());
        return response()->json('successfully added!');
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        return Contact::find($id);
    }


    public function update(Request $request, $id)
    {
        $this->contactRepo->update($id, $request->all());

        return response()->json('successfully updated');
    }


    public function destroy($id)
    {
        $this->contactRepo->delete($id);

        return response()->json('successfully deleted');
    }
}
