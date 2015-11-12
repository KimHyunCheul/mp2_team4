class TimetableController < ApplicationController
  def index
  end

  def new
		@schools = School.all
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end


	# Below actions are related with filter change automatically
	def update_departments
		if params[:school].to_i == 0
			@departments = School.find_by(school_name: params[:school]).departments
		else
			@departments = School.find(params[:school]).departments
		end

		respond_to do |format|
			format.js
		end
	end

	def update_classifications
		if params[:school].to_i == 0
			@classifications = School.find_by(school_name: params[:school]).classifications
		else
			@classifications = School.find(params[:school]).classifications
		end

		respond_to do |format|
			format.json { render :json => @classifications.to_json }
		end
	end

	def update_lectures_by_department
		if params[:department].to_i == 0
			@lectures = Department.find_by(department_name: params[:department]).lectures
		else
			@lectures = Department.find(params[:department]).lectures
		end

		respond_to do |format|
			format.json { render :json => @lectures.to_json }
		end
	end

	def update_lectures_by_classification
		if params[:classification].to_i == 0
			@lectures = Classification.find_by(classification_name: params[:classification]).lectures
		else
			@lectures = Classification.find(params[:classification]).lectures
		end

		respond_to do |format|
			format.json { render :json => @lectures.to_json }
		end
	end
end
